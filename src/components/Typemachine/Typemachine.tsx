import { useEffect, useState } from "react";

interface TypeMachineProps {
    sentences: string[]
}

const TIMOUT_BETWEEN_CHARACTERS = 70;
const TIMOUT_BETWEEN_SENTENCES = 2600;

export function TypeMachine ({ sentences, } : TypeMachineProps) {
    const [currentSentence, setCurrentSentence] = useState("");
    const [sentenceIndex, setSentenceIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        if (sentenceIndex < sentences.length) {
            if (charIndex < sentences[sentenceIndex].length) {
                const timeout = setTimeout(() => {
                    setCurrentSentence(current => current + sentences[sentenceIndex][charIndex]);
                    setCharIndex(charIndex + 1);
                }, TIMOUT_BETWEEN_CHARACTERS);
                return () => clearTimeout(timeout);
            } else {
                const timeout = setTimeout(() => {
                    setCurrentSentence("");
                    setCharIndex(0);
                    setSentenceIndex(sentenceIndex + 1);
                }, TIMOUT_BETWEEN_SENTENCES);
                return () => clearTimeout(timeout);
            }
        } else {
            setSentenceIndex(0);
        }
    }, [charIndex, sentenceIndex, sentences]);

    return (
        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: "600", whiteSpace: "pre" }}>
            {currentSentence}
        </div>
    );
}
