# 🧠 Smart Budget Assistant – Take-Home Task

_This repo includes only the starter app. Your task is to implement the full features described below._

This small React Native app simulates part of an AI-powered finance assistant. Your goal is to help users understand their recent spending and set monthly budgets.

---

## 🎯 Features

Please implement the following (focus on logic and structure, not perfect visuals):

1. **Transactions View**

   - Load and display the mock transaction list from `data/transactions.json`
   - Group transactions by `category`
   - Show total spending per category and total spent overall
   - [optional] Use a **virtualized list** (e.g. `FlatList`) for performance if the dataset is large

2. **Budget Input**

   - Allow users to input a monthly budget per category
   - [optional] Show a visual indication (e.g., progress bar, color) of spending vs budget

3. **(Optional) AI Prompt**
   - Add a simple text input where user can ask e.g. _"How can I save money next month?"_
   - Show a mock reply (hardcoded or GPT-like)

---

## 🧪 What We’re Looking For

- Clean structure (components, state, screens, etc.)
- Clear code and reasonable UI
- Thoughtful trade-offs, even if incomplete
- [Optional] Use of **virtualized rendering** for large lists
- Bonus: typed code, state management patterns, or extra polish

---

## ⏱ Timebox

**Please don’t spend more than ~3 hours.**  
It’s okay to leave comments or incomplete sections if needed.

---

## Notes for Candidate

You are free to remove or modify any pre-existing code in `App.tsx` to suit your implementation. Feel free to restructure components, screens, or navigation as needed to complete the assignment.

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

## 🙏 Thanks!

We appreciate your time and look forward to your submission 🙌
