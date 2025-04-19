## 🕷️ Ducky Script Cheat Sheet

### 🔹 Basic Commands
```ducky
REM Comment line
DELAY 1000           // Wait 1 second
STRING Hello world   // Types "Hello world"
ENTER                // Press Enter
TAB                  // Press Tab
ESCAPE               // Press Escape
```

### 🔹 Key Combinations
```ducky
CTRL ALT DEL         // Press Ctrl+Alt+Del
CTRL SHIFT ESC       // Open Task Manager
WINDOWS R            // Run dialog
ALT F4               // Close window
```

### 🔹 Advanced Timing
```ducky
DELAY 500            // Half second delay
REPEAT 5             // Repeat last command 5 times
```

### 🔹 Example Payload: Open Notepad and Type
```ducky
REM Open Notepad and type a message
WINDOWS r
DELAY 500
STRING notepad
ENTER
DELAY 1000
STRING Hello Ghostroot
ENTER
```

### 🔹 File Interaction (Windows)
```ducky
REM Open file explorer and navigate
WINDOWS e
DELAY 1000
STRING C:\Users\%USERNAME%\Documents
ENTER
```

### 🔹 Useful Tips
- Always test payloads in a safe VM.
- Use `REM` to document every block.
- Insert delays to account for system speed.

---

For organized use: drop this into **Neurovault > Protocols > ducky_script_cheatsheet.md**.

Need a Red Team starter payload pack next?

