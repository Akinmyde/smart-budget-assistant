# 🧠 Smart Budget Assistant

_This repo includes only the starter app. Your task is to implement the full features described below._

This small React Native app simulates part of an AI-powered finance assistant. Your goal is to help users understand their recent spending and set monthly budgets.

---

## 🎯 Features

Please implement the following (focus on logic and structure, not perfect visuals):

1. **Transactions View**

   - Load and display the mock transaction list from `data/transactions.json`
   - Group transactions by `category`
   - Show total spending per category and total spent overall

2. **Budget Input**

   - Allow users to input a monthly budget per category

3. **(Optional) AI Prompt**
   - Add a simple text input where user can ask e.g. _"How can I save money next month?"_
   - Show a mock reply (hardcoded or GPT-like)


## 🚀 Getting Started

1. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

2. Start the development server:

   ```bash
   npx expo start
   ```

3. Run the app:
   - On a **physical device** using the [Expo Go](https://expo.dev/client) app (scan QR code)
   - Or press `i` to open in **iOS simulator**, `a` for **Android emulator**

> 💡 If QR scan doesn’t work on LAN, try starting with tunnel mode:
>
> ```bash
> npx expo start --tunnel
> ```

> This project uses **TypeScript + Expo**, no native modules or additional setup required.

---

## 🛠️ Common Fixes

### EMFILE: too many open files (macOS)

If the project crashes with a `too many open files` error during `npx expo start`, run the following:

```bash
watchman watch-del-all
npx expo start --clear
```
