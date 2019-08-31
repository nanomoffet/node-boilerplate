module.exports = {
    '*.ts': ['prettier --write', 'tsc --noEmit', 'eslint --fix', 'git add'],
};
