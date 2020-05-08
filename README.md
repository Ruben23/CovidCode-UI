# HA UI

This repository is copied on GitHub without sensitive info, i.e. Frutiger, toolchain files (Sonar, Jenkins, CF) and git history
The `github` branch is the actual code that is deployed on [GitHub](https://github.com/admin-ch/CovidCode-UI).
Worflow:
* ensure you're on the branch you want to publish 
* delete actual `github` branch if existing 
* create a new branch without the history: `git checkout --orphan github`
* remove unwanted files and commit the changes
* check the wiring: `git remote -v`
* add GitHub remote if needed: `git remote add github https://github.com/admin-ch/CovidCode-UI.git`
* ensure the license file is present
* push on remote's master branch: `git push github github:master --force`


## Prerequisites
- GIT
- nodejs & npm
- AngularCli installed globally: `npm i -g @angular/cli`

## Setup the environment
- Clone the repo: `git clone https://stash.eap.bit.admin.ch/scm/bag_covidcode/ha-ui.git`.
- Install project dependencies: `npm ci`
- Start the project: `npm start`


## Commit message 
We have very precise rules over how our git commit messages can be formatted. This leads to more readable messages that are easy to follow when looking 
through the project history. The git commit messages will also be used to generate Oblique's change log.

For better readability, please follow the following rules:
 * 1 commit per change, fixes have to be squashed together. 
 * A change includes its tests, mocks, documentation and schematics. 
 * 1 commit concerns 1 scope (see below), if a commit spans multiple scopes, split it into several commits. **Exception**: changes that spans most of the library can be grouped together. In that case, there is no scope
 * no line of the commit message can be longer than 100 characters.
 * changes to the showcase should NEVER come with another type (see below) as __showcase__. All showcase changes of an issue should be squashed together

### Format 
Each commit message consists of a **header**, a **body** and a **footer**. The header has a special format that includes a **type**, a **scope** and a 
**subject**:

	<type>(<scope>): <subject>
	
	<body>
	
	<footer>

#### Header
The header is mandatory and lowercase only. The scope of the header is optional. There no space between **type** and **scope**. 

##### Type
The type is mandatory and must be one of the following:
* **feat**: Changes that creates, improves or removes a feature
* **fix**: Changes that fixes a bug
* **refactor**: Changes to a feature that neither adds, removes nor fixes a behavior 
* **test**: Changes that affect tests and their configuration only
* **docs**: Changes that affect the documentation only
* **showcase**: Changes that affect the showcase only
* **format**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
* **chore**: Anything that do not fit in any previous types (e.g. release, dependencies update, ...)

##### Scope
The scope is optional and should be the name of the Oblique feature affected:
* **generate-code**
* **home**
* **shared**
* **security**
* **toolchain** (for configuration, build, releases, schematics,...)

##### Subject
The subject is mandatory and contains a **succinct** description of the change:

* use the imperative, present tense: "change" not "changed" nor "changes"
* don't capitalize the first letter
* no dot (.) at the end

#### Body
The body is optional.
Just as in the subject, use the imperative, present tense: "change" not "changed" nor "changes". The body should include the motivation for the change and contrast this with previous behavior.

#### Footer
The footer is optional and should contain a reference to a JIRA issue if any, e.g.: `PTAPP-715`.

It should also contain any information about Breaking Changes.

Breaking Changes have to start with the words `BREAKING CHANGE:` followed by a newline. The rest of the commit message is then used for this. Multiple breaking changes can be displayed with bullet points

    PTAPP-715
    BREAKING CHANGE:
    * function `funcA` has been removed in favor of `funcB`
    * property `prop` has been removed with no replacement
    * file `fileName` has been renamed into `myFile`

