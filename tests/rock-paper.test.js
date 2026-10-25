// tests/rock-paper.test.js
import { describe, it, expect } from '@jest/globals';
import { pickComputerMove, determineWinner, updateScore } from '../rock-paper.js';

describe('Rock Paper Scissors Game Logic', () => {

    describe('pickComputerMove()', () => {
        it('should return Rock, Paper, or Scissors', () => {
            const move = pickComputerMove();
            expect(['Rock', 'Paper', 'Scissors']).toContain(move);
        });
    });

    describe('determineWinner()', () => {
        it('should return Tie when moves are identical', () => {
            expect(determineWinner('Rock', 'Rock')).toBe('Tie');
            expect(determineWinner('Paper', 'Paper')).toBe('Tie');
            expect(determineWinner('Scissors', 'Scissors')).toBe('Tie');
        });

        it('should correctly calculate player wins', () => {
            expect(determineWinner('Rock', 'Scissors')).toBe('You win');
            expect(determineWinner('Paper', 'Rock')).toBe('You win');
            expect(determineWinner('Scissors', 'Paper')).toBe('You win');
        });

        it('should correctly calculate player losses', () => {
            expect(determineWinner('Rock', 'Paper')).toBe('You lose');
            expect(determineWinner('Paper', 'Scissors')).toBe('You lose');
            expect(determineWinner('Scissors', 'Rock')).toBe('You lose');
        });
    });

    describe('updateScore()', () => {
        it('should increment wins when result is You win', () => {
            const score = { wins: 0, losses: 0, ties: 0 };
            const updated = updateScore('You win', score);
            expect(updated.wins).toBe(1);
            expect(updated.losses).toBe(0);
        });

        it('should increment losses when result is You lose', () => {
            const score = { wins: 0, losses: 0, ties: 0 };
            const updated = updateScore('You lose', score);
            expect(updated.losses).toBe(1);
        });

        it('should increment ties when result is Tie', () => {
            const score = { wins: 0, losses: 0, ties: 0 };
            const updated = updateScore('Tie', score);
            expect(updated.ties).toBe(1);
        });
    });
});
