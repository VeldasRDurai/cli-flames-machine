# 🔥 @veldasrdurai/flames-machine

A fun, simple **Node.js CLI** package to predict the relationship between two people using the classic **FLAMES** game rule. Just enter two names and let the machine do the prediction\!


## 🚀 Installation & Usage

This package is designed to be run directly using `npx` without needing global installation.

### Prerequisites

You must have **Node.js** (version 12 or higher recommended) installed on your system.

### Running the CLI

Execute the following command in your terminal:

```bash
npx @veldasrdurai/flames-machine
```

### What happens next?

1.  The CLI will prompt you to enter the **first person's name**.
2.  It will then prompt you to enter the **second person's name**.
3.  The program calculates the **FLAMES** result and displays the predicted relationship.

#### Example Session

```
$ npx @veldasrdurai/flames-machine
✨ Welcome to FLAMES-MACHINE... ✨
-----------------------------------
? Enter Name 1: **Veldas R Durai**
? Enter Name 2: **Aswani P**

Calculating result...
The relationship between Veldas R Durai and Aswani P is: **MARRIAGE**! 💍
```

## ⚙️ How FLAMES Works

The **FLAMES** game is a popular method to test the compatibility between two people, standing for the following relationship outcomes:

| Letter | Full Form | Prediction |
| :----: | :-------- | :--------- |
| **F** | **Friendship** | A friendly bond. |
| **L** | **Love** | A deep, romantic connection. |
| **A** | **Affection** | A caring and affectionate relationship. |
| **M** | **Marriage** | A long-term, wedded union. |
| **E** | **Enemies** | An antagonistic or rival relationship. |
| **S** | **Siblings** | A relationship like brother and sister (non-romantic). |

The calculation is based on the number of non-common letters remaining after removing all common letters from the two names, and then counting them off against the letters in **F-L-A-M-E-S** cyclically.

## 🤝 Contributing

Contributions are always welcome\! If you have suggestions for new features, bug fixes, or improvements to the algorithm, please feel free to open an [**issue**](https://github.com/VeldasRDurai/cli-flames-machine/issues) or submit a [**Pull Request**](https://github.com/VeldasRDurai/cli-flames-machine/pulls). Checkout our [**CONTRIBUTING.md**](./CONTRIBUTING.md) for more contributor guidance.

## 📝 License

This project is licensed under the [**MIT License**](./LICENCE).
