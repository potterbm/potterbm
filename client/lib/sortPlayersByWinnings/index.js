export default players => players.sort((a, b) => b.get('winnings') - a.get('winnings'));
