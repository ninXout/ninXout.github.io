// place files you want to import through the `$lib` alias in this folder.

import * as fs from 'fs';

function handleLink(link: string) {
    window.open(link)
}

export function randomQuote() {
    const fileContent = fs.readFileSync("static/quotes.txt", 'utf-8');
    const split = fileContent.split('\n');
    console.log(split);
    return split[Math.floor(Math.random() * split.length)] as string;
}