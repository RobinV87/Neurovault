## 🧠 Bash Cheat Sheet — Core Commands and Concepts

### 🔹 File & Directory Operations
```bash
ls -alh              # List with details
cd /path/to/dir      # Change directory
pwd                  # Current directory
mkdir new_folder     # Create directory
touch file.txt       # Create file
rm file.txt          # Remove file
rm -rf folder/       # Force delete folder
cp file1 file2       # Copy file
mv old new           # Move/rename
find . -name "*.sh"  # Find files recursively
```

### 🔹 Permissions & Ownership
```bash
chmod +x script.sh        # Make executable
chmod 755 file            # rwxr-xr-x
chown user:group file     # Change owner
```

### 🔹 Viewing & Editing Files
```bash
cat file.txt              # Print contents
less file.txt             # Scrollable view
head -n 10 file.txt       # First 10 lines
tail -n 10 file.txt       # Last 10 lines
grep "string" file.txt    # Search pattern
vim file.txt              # Edit with vim (only vim 😉)
```

---

## ⚙️ Command Mastery

### 🔸 Chaining
```bash
command1 && command2     # Run 2 if 1 succeeds
command1 || command2     # Run 2 if 1 fails
command1; command2       # Run 1 then 2 always
```

### 🔸 Variables
```bash
name="Ghostroot"
echo "Hello, $name"
```

### 🔸 Environment Variables
```bash
export PATH=$PATH:/new/path
echo $HOME $USER $PWD
```

### 🔸 Command Substitution
```bash
now=$(date)
echo "Current time: $now"
```

---

## ⟳ Loops

### ▶ For Loop
```bash
for i in {1..5}; do
  echo "Number: $i"
done

for file in *.txt; do
  echo "Processing $file"
done
```

### ▶ While Loop
```bash
count=1
while [ $count -le 5 ]; do
  echo "Count: $count"
  ((count++))
done
```

### ▶ Until Loop
```bash
x=0
until [ $x -eq 5 ]; do
  echo "x is $x"
  ((x++))
done
```

---

## ⚖️ Conditionals

### ▶ If/Else
```bash
if [ "$name" == "Ghostroot" ]; then
  echo "Welcome, hacker."
else
  echo "Access Denied."
fi
```

### ▶ Elif
```bash
if [ $x -lt 10 ]; then
  echo "Less than 10"
elif [ $x -eq 10 ]; then
  echo "Equal to 10"
else
  echo "Greater than 10"
fi
```

### ▶ Test Operators
```bash
[ -f file.txt ]        # True if file exists
[ -d folder ]          # True if directory exists
[ "$a" == "$b" ]       # String equality
[ $a -lt 5 ]           # Less than
[ $a -ge 10 ]          # Greater or equal
```

---

