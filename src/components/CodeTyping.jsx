import React, { useEffect, useMemo, useState } from 'react';

// Animated syntax-code window for the hero: types a small Java class
// character by character (with syntax colours), pauses, then restarts.
// Tokens are pre-coloured; typing just reveals more of them, so the
// colours are correct even mid-word.
const TOKENS = [
    { t: 'public class ', c: 'tok-key' },
    { t: 'Developer', c: 'tok-class' },
    { t: ' {\n', c: 'tok-punc' },
    { t: '    String ', c: 'tok-type' },
    { t: 'name', c: 'tok-prop' },
    { t: ' = ', c: 'tok-punc' },
    { t: '"Nguyễn Nam Thắng"', c: 'tok-str' },
    { t: ';\n', c: 'tok-punc' },
    { t: '    String ', c: 'tok-type' },
    { t: 'role', c: 'tok-prop' },
    { t: ' = ', c: 'tok-punc' },
    { t: '"Software Engineer"', c: 'tok-str' },
    { t: ';\n', c: 'tok-punc' },
    { t: '    String[] ', c: 'tok-type' },
    { t: 'stack', c: 'tok-prop' },
    { t: ' = {\n', c: 'tok-punc' },
    { t: '        "Java"', c: 'tok-str' },
    { t: ', ', c: 'tok-punc' },
    { t: '"C#"', c: 'tok-str' },
    { t: ', ', c: 'tok-punc' },
    { t: '"Spring Boot"', c: 'tok-str' },
    { t: ',\n', c: 'tok-punc' },
    { t: '        "ASP.NET Core"', c: 'tok-str' },
    { t: ', ', c: 'tok-punc' },
    { t: '"React"', c: 'tok-str' },
    { t: '\n    };\n\n', c: 'tok-punc' },
    { t: '    boolean ', c: 'tok-type' },
    { t: 'hireable', c: 'tok-fn' },
    { t: '() {\n', c: 'tok-punc' },
    { t: '        return ', c: 'tok-key' },
    { t: 'hardWorker\n            && problemSolver\n            && !skills.isEmpty()', c: 'tok-prop' },
    { t: ';\n    }\n}', c: 'tok-punc' },
];

const TOTAL = TOKENS.reduce((sum, tok) => sum + tok.t.length, 0);

// Reveal the first `count` characters across the token list.
const buildVisible = (count) => {
    const out = [];
    let left = count;
    TOKENS.forEach((tok, i) => {
        if (left <= 0) return;
        out.push(
            <span key={i} className={tok.c}>{tok.t.slice(0, left)}</span>
        );
        left -= tok.t.length;
    });
    return out;
};

const CodeTyping = () => {
    const reduced = useMemo(
        () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches,
        []
    );
    const [count, setCount] = useState(reduced ? TOTAL : 0);

    useEffect(() => {
        if (reduced) return;
        let timeout;
        if (count < TOTAL) {
            timeout = setTimeout(() => setCount((c) => c + 1), 26);
        } else {
            timeout = setTimeout(() => setCount(0), 3200);
        }
        return () => clearTimeout(timeout);
    }, [count, reduced]);

    const visible = buildVisible(count);

    return (
        <div className="code-card" aria-hidden="true">
            <div className="code-card-head">
                <span className="code-dot" style={{ background: '#ef4444' }}></span>
                <span className="code-dot" style={{ background: '#f59e0b' }}></span>
                <span className="code-dot" style={{ background: '#10b981' }}></span>
                <span className="code-file">Developer.java</span>
            </div>
            <pre className="code-body"><code>{visible}<span className="code-caret"></span></code></pre>
        </div>
    );
};

export default CodeTyping;
