# Math notes
Notes for my math clases

- [Math notes](#math-notes)
  * [Git cheatsheet](#git-cheatsheet)
    + [Branches](#branches)

<small><i><a href='http://ecotrust-canada.github.io/markdown-toc/'>Table of contents generated with markdown-toc</a></i></small>

## Git cheatsheet

### Branches

* Create branch: `git branch <branch-name>`
* Switch to branch: `git checkout <branch-name>`
* Can be combined in a single command: `git checkout -b <branch-name>`
* Delete branch locally: `git branch -d <branch-name>`
* Delete branch remotely: `git push origin --delete <branch-name>`

When wanna work on something:

1. Create new branch for the new feature.
2. Work on the feature
3. `git add .`
4. `git commit -m "comments about the changes"`
3. `git push -u origin <branch-name>`
5. Merge the changes with a PR in github.
