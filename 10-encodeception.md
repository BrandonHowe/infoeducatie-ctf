# Literal cancer

I hate this. I've spent well over 12 hours on this. This is so stupid. First it was a challenge, then a struggle, and now an abject hell. I hate it.

## Update

I finally figured it out, yay. Steps:

- ROT13
- From Base64
- From Base64 (again)
- Reverse

The worst part is, I came up with the ROT13 and From Base64 part on the first day, but I didn't bother to decode from base64 again.

After reading some cryptography stuff, I found Polybius squares, which mapped 2-digit numbers to letters. I decoded all the 2 digit numbers, put them back in the spots they were, and then joined the stuff back together.

Finally, I decoded from base 64 again, reversed the string, and got the code.