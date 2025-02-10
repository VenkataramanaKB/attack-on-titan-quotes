# 🏹 Attack on Titan Quotes API

A simple and lightweight API that serves inspirational and memorable quotes from the popular anime **Attack on Titan**, along with the respective author.

## 🚀 Usage

You can retrieve a random quote from the anime by making a **GET request** to the following endpoint:

```sh
curl https://aot-api.vercel.app/quote
```

Alternatively, you can access it in your browser or use it in applications that fetch JSON data.

### 📌 Example Response

When you call the API, it returns a JSON object containing a quote and its author. Example:

```json
{
  "quote": "If you win, you live. If you lose, you die. If you don’t fight, you can’t win!",
  "author": "Eren Yeager"
}
```

## 🌟 Features

- Provides random **Attack on Titan** quotes.
- Simple and fast API response.
- Free to use with **no authentication required**.
- Open-source and **community-driven**.

## 🛠️ Contributing

Want to make this API even better? You can contribute by adding more quotes! Here’s how:

1. **Fork this repository** to your GitHub account.
2. **Clone the repository** to your local machine:
   ```sh
   git clone https://github.com/VenkataramanaKB/attack-on-titan-quotes.git
   ```
3. **Navigate to the project folder**:
   ```sh
   cd attack-on-titan-quotes
   ```
4. **Edit the `quotes.js` file** by adding your new quotes in the following format:

   ```js
   {
     quote: "This world is cruel. And also, very beautiful.",
     author: "Mikasa Ackerman"
   }
   ```

5. **Commit your changes**:
   ```sh
   git add quotes.js
   git commit -m "add: Name of the Person"
   ```
6. **Push the changes** to your forked repository:
   ```sh
   git push origin main
   ```
7. **Create a Pull Request (PR)** from your repository to this project's main branch.

Your contribution will be reviewed, and once approved, your quote will be added to the API! 🎉

## 📜 License

This project is licensed under the **MIT License**, allowing free use, modification, and distribution while ensuring the original author is credited.

---

Enjoy the **Attack on Titan** quotes and let them inspire you in your journey! 🚀

