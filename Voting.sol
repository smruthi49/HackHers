// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.0;

contract Voting {
    struct Candidate {
        string name;
        uint256 voteCount;
    } 

    Candidate[] public candidates;
    address owner;
    mapping(address => bool) public voters;

    uint256 public Start_Vote;
    uint256 public End_Vote;

    constructor(string[] memory _cNames, uint256 _timemin){
        for(uint256 i=0;i<_cNames.length;i++){
            candidates.push(
                Candidate({
                    name: _cNames[i],
                    voteCount: 0

                })
            );
        }
        owner = msg.sender;
        // canVoteNow[owner] = true;
        Start_Vote = block.timestamp;
        End_Vote = block.timestamp + (_timemin * 1 minutes);

    }

    modifier OnlyOwner {
      require(msg.sender == owner);
      _;  
    }

    function add_cand(string memory _name) public OnlyOwner{
        candidates.push(Candidate({
            name: _name,
            voteCount : 0
        }));
    } 

    function vote(uint256 _candind) public{
        require(!voters[msg.sender],"Error: You have already voted!");
        require(_candind < candidates.length,"Invalid Candidate");
        candidates[_candind].voteCount++;
        voters[msg.sender] = true;
        // canVoteNow[msg.sender] = false;
    }  

    function get_all_votes() public view returns (Candidate[] memory){
        return candidates;
    }

    function get_voting_status() public view returns (bool) {
        return (block.timestamp >= Start_Vote && block.timestamp < End_Vote);
    }

    function get_remaining_time() public view returns (uint256) {
        require(block.timestamp >=Start_Vote, "Voting Has Not Commenced!!!");
        if(block.timestamp >=End_Vote){
            return 0;
        }
        return End_Vote - block.timestamp;
    }
}