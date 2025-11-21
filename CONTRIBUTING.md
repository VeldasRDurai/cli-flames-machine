# Contributing to cli-flames-machine

🎉 We are thrilled that you are interested in contributing to **cli-flames-machine**! Every contribution, whether it's code, documentation, or issue reports, helps make this project better for everyone.

By participating in this project, you agree to abide by our [Code of Conduct](CODE_OF_CONDUCT.md).

---

## 1. Getting Started: How to Contribute

Before submitting a Pull Request, please engage with the community by using our **GitHub Issue Templates** for the fastest feedback loop.

### 🐞 Reporting Bugs

If you find an issue that prevents the package from working as expected, please use the **Bug Report** template.

A high-quality bug report should include:

* **Package Version:** Specify the exact version number you are using.
* **Environment Details:** Node.js version, Operating System, and any relevant runtime information (e.g., specific framework versions).
* **Steps to Reproduce:** A clear, numbered list of actions that consistently lead to the bug.
* **Expected Behavior:** A concise description of what the package *should* do.
* **Minimal Reproducible Example (MRE):** This is critical. Provide the smallest possible code snippet or link to a repository/CodeSandbox that demonstrates the issue in isolation. Without this, debugging is often impossible.

### ✨ Suggesting Enhancements

If you have an idea for a new feature or an improvement to an existing one, please use the **Feature Request** template.

Before creating the request, check the existing issues and discussions to see if the topic has been addressed. Your suggestion should include:

* **Motivation:** Explain the use case and the specific problem this enhancement solves for you or other users.
* **Proposed Solution/API:** If possible, describe how you envision the new feature integrating into the existing package.


## 2. Local Development Environment Setup

To contribute code, you will need a proper local development setup.

### 2.1 Prerequisites

Ensure you have the following installed:

* **Git:** For version control.
* **Node.js (LTS):** We recommend using the latest Node.js Long-Term Support version.
* **npm or yarn:** For package management.

### 2.2 Setup Instructions

1.  **Fork the Repository:** Click the "Fork" button on the main project page on GitHub.
1.  **Clone Your Fork:**
    ```bash
    git clone https://github.com/YOUR_GITHUB_USERNAME/cli-flames-machine.git
    cd cli-flames-machine
    ```
1.  **Install Dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```
1.  **Create a Development Branch:** Always create a new branch for your work based on the `release` branch (current working branch). Use descriptive names that include the type and id of work `<type>/<id>-<desc>` (e.g., `feat/453-add-new-config` or `fix/102-invalid-out`).
    ```bash
    git checkout release
    git pull origin release # Ensure you are up-to-date
    git checkout -b [<type>/<id>-<desc>]
    ```

### 2.3 Core Development Scripts

You will use these commands frequently during development:

| Command | Purpose | Requirement for PR Submission |
| :--- | :--- | :--- |
| `npm run build` | **Compiles** source files (e.g., TypeScript/Babel) into the final distribution code (usually in the `dist/` folder). | Must run successfully before pushing. |
| `npm test` | **Runs the entire test suite** (Unit and Integration). | **All tests must pass.** |
| `npm run lint` | Runs ESLint and Prettier to check for code quality and style compliance. | **Must pass.** |
| `npm run format` | Automatically fixes simple formatting issues using Prettier. | Highly recommended before committing. |

---

## 3. Submitting Code via Pull Requests (PRs)

### 3.1 Code Style and Quality

We use **ESLint** and **Prettier** to enforce a consistent style. Your code will be automatically checked by our **GitHub Actions CI Pipeline** when you submit a PR. It is best practice to run `npm run lint` and `npm run format` locally before pushing your changes.

### 3.2 Conventional Commits (Strict Requirement) 🤖

This project uses **GitHub Actions** for Continuous Integration (CI), automated testing, and **Automatic Semantic Releases**. This means the package versioning and changelog are generated *automatically* based on your commit messages.

Therefore, **all commits must follow the Conventional Commit specification**: `<type>(<scope>): <description>`.

| Type | Description | Release Impact |
| :--- | :--- | :--- |
| `feat` | Introduces a new feature or substantial enhancement. | **Minor Version Bump** |
| `fix` | Corrects a bug. | **Patch Version Bump** |
| `docs` | Changes to documentation only (README, JSDoc comments, etc.). | No Release |
| `refactor` | Code restructuring/cleanup without behavior changes. | No Release |
| `test` | Adding missing tests or correcting existing test logic. | No Release |
| `chore` | Maintenance tasks (build config, tooling, dependency updates). | No Release |

> **Breaking Changes:** If your commit introduces a change that requires users to modify their existing code to upgrade, you **must** include `BREAKING CHANGE: [description of change]` in the commit body. This triggers a **Major Version Bump** via the automated release process.

### 3.3 Submit a Pull Request

Follow these steps when your changes are complete and locally verified:

1.  **Run Final Checks:** Execute `npm run build`, `npm test`, and `npm run lint` one last time to ensure compliance.
2.  **Commit Your Changes:** Stage your files and commit using the Conventional Commit format. Group related logical changes into a single commit if possible.
    ```bash
    git add .
    git commit -m "<type>(<scope>): <description>" -m "Refs :<id>"
    ```
3.  **Push Your Branch:** Push the local branch to your personal fork on GitHub.
    ```bash
    git push origin `<type>/<id>-<desc>`
    ```
4.  **Create the Pull Request (PR):**
    * Navigate to your fork on GitHub.
    * Click the **"Compare & Pull Request"** button.
    * Ensure the base repository is set to **`cli-flames-machine/release`** and the head is set to your feature branch.
5.  **Fill out the Template:** The **Pull Request Template** will automatically load. Please fill in all sections, including the **checklist**, to help the maintainers review the changes efficiently.
6.  **Link the Issue:** In the description, clearly link your PR to the issue it addresses (e.g., "Closes #123" or "Fixes #456").

Thank you again for your valuable time and effort!