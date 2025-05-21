# memoryhelper
Memorization Checking System - Final Year Project

### 1. Title Screen
- **Components**:
  - App logo
  - "MemoryHelper" title
  - "Sign In" button (navigates to Sign In screen)

### 2. Sign In Screen
- **Components**:
  - Title: "Sign in to MemoryHelper"
  - Text input for email
  - Text input for password (with eye icon to toggle visibility)
  - "Sign In" button (navigates to Main Menu screen)
  - Link: "Don't have an account? Sign Up" (navigates to Sign Up screen)

### 3. Sign Up Screen
- **Components**:
  - Text input for username (with validation for uniqueness)
  - Text input for email (with validation for uniqueness)
  - Text input for password (with validation: at least 8 characters)
  - "Sign Up" button (navigates to Sign In screen)
  - Link: "Already have an account? Sign In" (navigates to Sign In screen)

### 4. Main Menu Screen (Home)
- **Components**:
  - Welcome message: "Welcome back, (username)"
  - Search bar (searches by title, category, author)
  - List of text cards (displays title, category, author)
  - Navigation bar: Home, Create, Profile
- **Interactions**:
  - Clicking a text card navigates to Text Info screen
  - Clicking "Create" navigates to Create screen
  - Clicking "Profile" navigates to Profile screen

### 5. Create Screen
- **Components**:
  - Text inputs: Title, Category, Text
  - "Add" button (adds text and navigates to Text Info screen)
  - Toggle switch for public/private setting
- **Interactions**:
  - Adding text updates the list of text cards on Home and Profile screens

### 6. Profile Screen
- **Components**:
  - Username
  - Text count
  - Bookmark count
  - List of user's text cards
  - Icons: Log Out, Bookmarks, Settings
- **Interactions**:
  - Clicking a text card navigates to Text Info screen
  - Clicking Log Out navigates to Title screen
  - Clicking Bookmarks navigates to Bookmarks screen
  - Clicking Settings navigates to Settings screen

### 7. Text Info Screen
- **Components**:
  - Title, author, text of the selected card
  - "Start" button (navigates to Memorization screen)
  - Bookmark icon
- **Interactions**:
  - Clicking "Start" navigates to Memorization screen

### 8. Memorization Screen
- **Components**:
  - Title, author
  - Text input for rewriting text
  - Hint counter
  - Buttons: Restart, Finish, Hint
- **Interactions**:
  - Using "Hint" shows original text and increments hint counter
  - Clicking "Finish" navigates to Report screen

### 9. Report Screen
- **Components**:
  - Side-by-side comparison of user text and original text
  - Incorrect words highlighted (red/yellow based on Levenshtein distance)
  - Restart icon
  - Finish button
- **Interactions**:
  - Clicking Restart navigates to Memorization screen
  - Clicking Finish navigates to Home screen

### 10. Bookmarks Screen
- **Components**:
  - List of bookmarked text cards
- **Interactions**:
  - Clicking a text card navigates to Text Info screen

### 11. Settings Screen
- **Components**:
  - Profile edit options (username, password)
- **Interactions**:
  - Similar validation process as Sign Up screen

### Additional Notes:
- Consider implementing user authentication and validation for secure login and sign-up processes.
- Ensure responsive design and user-friendly navigation for a smooth user experience.
- Test the app thoroughly to identify and fix any bugs or issues.
