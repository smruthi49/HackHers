![image](https://github.com/smruthi49/HackHers/assets/94833021/b0ca21af-3876-44c5-99ca-31ed34d7d8b4)


# VoteChain

This is a decentralized voting web application that leveraged blockchain technology to ensure transparent, secure, and tamper-resistant voting. 

## Features
- **Decentralized Voting** : Eliminates the need for central authority, making the process more transparent.
- **Security** : Utilize Blockchain's cryptographic features to secure votes and ensure integrity.
- **Anonymity** : Provides a secure and anonymous voting experience.
- **Tamper Resistance** : Ensure the immutability of voting records on the blockchain.
- **User-Friendly Interface** : Offers an intuitive and user-friendly interface built on React.

## How it Works
### System architecture:

![BLOCKCHAIN drawio](https://github.com/smruthi49/HackHers/assets/98334746/6d0cb6ca-7e44-4189-81ae-67bc0635212f)

![block flow drawio](https://github.com/smruthi49/HackHers/assets/98334746/fb4d95c9-2ad7-41fd-a8c1-48fe17488303)

## Why is Blockchain-based voting system better
1. **Fraud Prevention** : Blockchain's cryptographic security ensures the integrity of votes.
2. **Avoid Long Queues** : Decentralized and remote voting options.
3. **Tamper-Resistance** : Blockchain's immutability safeguards against tampering, providing a secure and transparent voting process.
4. **Secure ID Verification** : Enhances security of the voting system, reducing the potential for identity fraud.
5. **Mitigation of Last-minute Campaigning** : Enforced deadlines in blockchain-based voting systems minimize the impact of last-minute campaigning. 

### Work flow:

1. The user logs in to the system as a voter with their voter ID and aadhar number.
2. The validity of the credentials are checked with the database using Rest API.
3. One-factor authentication is done by sending a one time password to the voter's aadhar linked mobile number.
4. The geolocation of the user is verified and if:
   i) They are outside india
   ii) Their credentials are invalid
   iii) Their voter ID is inactive,
   then the user is not allowed to log in.
5. The main page displays the candidates acccording to the voter's constituency, which is fetched from the database.
6. From the time the user has logged in, the session starts. 
7. Once the user presses on "vote", the smart contract logic is initiated.
8. Once the session time is up, system automatically logs the user out. 
9. The user will be able to view the count of votes and so will the admin.

### Smart contract logic:

1. The smart contract is initiated with a list of contesting candidate names.
2. When the user is logged in the system as a voter, their metamask wallet address is captured by the contract.
3. The function vote() takes in parameter as candidate ID. It first checks if the voter's address is already present in the voter's list hence making sure if the voter has voted or not.
4. Next, it checks if the candidate is a valid candidate by checking if the ID of the candidate is less than the total length of the number of candidates present, i.e, validity checking.
5. Once these checks are done, when the user presses on vote, the vote count of the candidate increments by one.
6. Once they are done voting, the address of the voter is added to the voter's list by mapping it to true.

### User interface design:

Used react js and library "styled-components" for building intuitive user interface.

## SCREENSHOTS

1. Login Page
   ![image](https://github.com/smruthi49/VoteChain/assets/94833021/8f17e80d-ec11-484a-a044-38e4eebef030)
   
3. User Dashboard
   ![image](https://github.com/smruthi49/VoteChain/assets/94833021/1050c071-d84b-4d3d-8751-97fa3552edeb)
   ![image](https://github.com/smruthi49/VoteChain/assets/94833021/a9fccfa7-c501-458f-97aa-d3218fe8955c)
   
5. Connect to MetaMask Wallet
   <img width="1280" alt="Screenshot 2024-01-28 at 16 43 42" src="https://github.com/smruthi49/VoteChain/assets/94833021/7ca02306-457e-4209-944b-e7ead7601d58">
   
6. Connected to MetaMask Wallet
   <img width="1280" alt="Screenshot 2024-01-28 at 16 43 53" src="https://github.com/smruthi49/VoteChain/assets/94833021/e2c114cf-ba95-4867-9c73-7f024f1f527a">
   
7. List of Candidates
   <img width="1280" alt="Screenshot 2024-01-28 at 16 45 39" src="https://github.com/smruthi49/VoteChain/assets/94833021/dd628bc7-1277-47fd-8df6-6f3fe3ae2446">
   
8. Cast your Vote
   <img width="1280" alt="Screenshot 2024-01-28 at 16 45 56" src="https://github.com/smruthi49/VoteChain/assets/94833021/991b8175-1428-455c-a3ac-83da97cdbc0d">
   
9. Confirm Transaction
   <img width="1280" alt="Screenshot 2024-01-28 at 16 46 07" src="https://github.com/smruthi49/VoteChain/assets/94833021/3109a1a1-6eb3-459f-98b7-268c3fa3deb0">
   
10. Vote Added - Confirmation
   <img width="1280" alt="Screenshot 2024-01-28 at 16 46 18" src="https://github.com/smruthi49/VoteChain/assets/94833021/d3df0f12-82d9-44a5-9a1a-196bd176bcf4">
   
11. You cannot vote twice - Restricts Double Voting
    <img width="1280" alt="Screenshot 2024-01-28 at 16 46 33" src="https://github.com/smruthi49/VoteChain/assets/94833021/70364b9d-9f94-423f-8af9-3d6f6bad590f">
    
12. List of Transactions
    <img width="1280" alt="Screenshot 2024-01-28 at 16 47 06" src="https://github.com/smruthi49/VoteChain/assets/94833021/367c9d56-6106-4151-81f6-e97e02e35f4d">
    
13. Vote count of candidate incremented
    <img width="1280" alt="Screenshot 2024-01-28 at 16 49 01" src="https://github.com/smruthi49/VoteChain/assets/94833021/2773d484-ca0f-470b-bb75-d4c8e96bac3c">
    





