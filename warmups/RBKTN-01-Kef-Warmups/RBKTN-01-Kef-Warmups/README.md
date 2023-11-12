# RBKTN-01-Kef-Warmups


## FIRST-TIME WORK 

1. Fork the required warm-up repo (check discord to see link).

2. From your Terminal, clone the _forked_ repo to your local Desktop, (you can find it in your Github repositories).
   git clone https://github.com/UserName/RepoName

3. From your terminal, Navigate to _the forked repo_.
   cd rbktn-01-kef-warmups OR just open the terminal inside the forked folder.
   
4. Create a new remote locally by running this command in your terminal:

   git remote add TheRemoteName RepoLinkHere

   example:
   ```sh
   git remote add rbk https://github.com/rbk-org/warmUp
   ```
4. Read the question, solve it, and save.

5. Use git status to check the changed files.
   ```sh
   git status
   ```
6. Stage the changes of the file.
   ```sh
   git add fileName.js
   ```
7. Commit your changes
    ```sh
   git commit -m "YOU_MESSAGE"
   ```
8. Push your code to your GitHub account
    ```sh
   git push origin master
   ```
   
9. share your solution with the administration, from your forked repo in your Github account, select Pull Requests and then click on create a New pull request.



## Daily work


1. Get the new daily warm-up by pulling it from the remote.
   git pull yourRemoteName master
   example: 
    ```sh
   git pull RBK master
    ```

   Note: if you can’t remember your remote name, use the following command to know
    ```sh
   git remote -v 
    ```
2. Read the new warm-up exercise, solve it, and save.
3. Use git status to check the changed files.
    ```sh
   git status
    ```
4. Stage the changes of the file.
    ```sh 
   git add fileName.js
     ```
5. Commit your changes
    ```sh
   git commit -m “yourMessage”
     ```
6. Push your code to your GitHub account
   ```sh
   git push origin master
    ```
7. You are all done.
