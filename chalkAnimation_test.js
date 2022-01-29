import chalkAnimation from "chalk-animation";

// Visit : https://github.com/bokub/chalk-animation

const sleep = (ms = 5000) => new Promise((r) => setTimeout(r, ms));

const start = async () => {
    // rainbow	pulse glitch radar neon karaoke
    const rainbowTitle = chalkAnimation.rainbow(
        'const rainbow = chalkAnimation.rainbow("Lorem ipsum dolor sit amet");'
    );

    await sleep();
    rainbowTitle.stop();
}

await start();