let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];



let storyWords = story.split(' ');

// HOW MANY WORDS IN THE STORY
const wordCount = storyWords.length;


// REMOVES UNNECESSARY WORDS FROM THE BETTERWORDS ARRAY
const betterWords = storyWords.filter(word => {
	if (unnecessaryWords.includes(word)) {
		return false;
	} else {
	return true;
  }
});

//WORD COUNT AFTER GETTING RID OF UNNECESSARY WORDS
const NewWordCount = betterWords.length;


// OVERUSED WORDS COUNTER 
let reallyCount = 0;
let veryCount = 0;
let basicallyCount = 0;

for (i = 0; i < betterWords.length; i++) {
	if (overusedWords[0] === betterWords[i]) {
	  reallyCount += 1;
	} else if (overusedWords[1] === betterWords[i]) {
	  veryCount += 1;
	} else if (overusedWords[2] === betterWords[i]) {
	  basicallyCount += 1;
	}
  }


// SENTENCES COUNTER 
let sentenceCount = 0;

for (i = 0; i < betterWords.length; i++) {
  for(j = 0; j < betterWords[i].length; j++) {
	if (betterWords[i][j] === '.' || betterWords[i][j] === '!') {
	  sentenceCount += 1;
	}
  }
}

// STORY EVALUATION
const storyEval = `There were ${wordCount} words in the story to begin with. After removing the unnecessary words (extremelly, literally & actually) there were ${NewWordCount} words and there were ${sentenceCount} sentences in total. The overused words 'really' was used ${reallyCount} times, 'very' was used ${veryCount} times and 'basically' was used ${basicallyCount} time.

`;

console.log(storyEval);

console.log(betterWords.join(' '));