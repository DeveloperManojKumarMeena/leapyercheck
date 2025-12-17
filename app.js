document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('leapForm');
    const yearInput = document.getElementById('yearInput');
    const resultEl = document.getElementById('result');
    const clearBtn = document.getElementById('clearBtn');

    function isLeapYear(y) {
        if (!Number.isFinite(y)) return false;
        if (y % 4 !== 0) return false;
        if (y % 100 !== 0) return true;
        return y % 400 === 0;
    }

    function showResult(message, positive) {
        resultEl.textContent = message;
        resultEl.classList.toggle('positive', !!positive);
        resultEl.classList.toggle('negative', !positive);
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const value = yearInput.value.trim();
        if (value === '') {
            showResult('Please enter a year.', false);
            return;
        }
        const year = Number(value);
        if (!Number.isInteger(year) || year < 0) {
            showResult('Enter a valid non-negative integer year.', false);
            return;
        }

        if (isLeapYear(year)) {
            showResult(`${year} is a leap year.`, true);
        } else {
            showResult(`${year} is not a leap year.`, false);
        }
    });

    clearBtn.addEventListener('click', () => {
        yearInput.value = '';
        resultEl.textContent = '';
        resultEl.className = 'result';
        yearInput.focus();
    });
});