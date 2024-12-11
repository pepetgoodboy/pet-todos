# Pet Todos

Pet Todos is a simple Todo List application built with Next.js and Supabase. This app allows users to create, read, update, and delete their task lists effortlessly. It also includes user authentication and account verification features.

## Key Features

1. **User Authentication**

   - Users can register using their email.
   - Account verification via email powered by Supabase.
   - User login and logout functionalities.

2. **Task Management**

   - Add new tasks.
   - View task lists.
   - Update existing tasks.
   - Delete tasks.

3. **Notifications**

   - Utilizes `react-hot-toast` to display notifications, such as successful verification or expired tokens.

4. **UI/UX**
   - Responsive and user-friendly design.
   - Informative verification page.

## Technologies Used

- **Frontend:**

  - [Next.js](https://nextjs.org/): A React framework for modern web applications.
  - CSS or TailwindCSS for styling.

- **Backend:**

  - [Supabase](https://supabase.com/): Backend as a Service (BaaS) for authentication and data storage.

- **Libraries:**
  - [React Hot Toast](https://react-hot-toast.com/): For displaying notifications.

## How to Run the Project

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/username/pet-todos.git
   cd pet-todos
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

3. **Configure Supabase:**

   - Create an account on [Supabase](https://supabase.com/).
   - Create a new project on Supabase.
   - Copy the URL and `anon key` from Supabase to your `.env.local` file:
     ```env
     NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
     NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
     ```

4. **Run the Application:**
   ```bash
   npm run dev
   ```
   The application will run on `http://localhost:3000`.

## Future Features

- Task scheduling with reminders.
- Adding categories for tasks.
- Multi-language support.

## Contribution

If you want to contribute to this project, feel free to submit a pull request or report an issue in the issue tracker.

## License

This project is licensed under the [MIT License](LICENSE).

---

Made with ❤️ by Pepet Goodboy.
