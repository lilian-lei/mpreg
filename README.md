# MPreg CLI

## Background Info
Pregnant Man (🫃) Emoji Meaning: A pregnant man holding his round stomach. Sometimes used in jest to represent feeling too full after overeating, as in a "food baby."

Variants include Pregnant Person (🫄) and Pregnant Woman (🤰).

This emoji was approved to make the emoji keyboard more consistent and gender inclusive. Pregnant Man was approved as part of [Unicode 14.0 in 2021](https://unicode.org/versions/Unicode14.0.0/) and added to [Emoji 14.0 in 2021](https://emojipedia.org/emoji-14.0).

## How to use

### Basic syntax
```bash
python3 mpreg [OPTIONS]
```

### Options
- `-i, --input <file>` - Input file path (default: stdin)
- `-o, --output <file>` - Output file path (default: stdout)
- `-d, --diverse` - Use diverse pregnant person emoji variants (default)
- `-v, --vanilla` - Use standard pregnant man emoji only

### Examples

**Read from file, write to file:**
```bash
python3 mpreg -i input.txt -o output.txt
```

**Read from stdin, write to file:**
```bash
echo "some text" | python3 mpreg -o result.txt
```

**Read from file, write to stdout:**
```bash
python3 mpreg -i input.txt
```

**Use with pipes:**
```bash
cat input.txt | python3 mpreg | tee output.txt
```

**Enable diverse emoji variants:**
```bash
python3 mpreg -i input.txt -d
```

**Use vanilla mode (standard pregnant man emoji only):**
```bash
python3 mpreg -i input.txt -v
```

### Notes
- If no input file is specified, the tool reads from standard input
- If no output file is specified, results are written to standard output
- The `--diverse` and `--vanilla` flags are mutually exclusive

## Future Features
- Web App React Based UI
- Terminal based CLI interface
- ChatGPT integration through API keys
- Local model hosting and filtering
- Expanded character replacement tools
