function goodNews(n) {
    if (n >= 7) {
        console.log("Approved")
    }
}

goodNews(8.1)
goodNews(6)

function talkOnlyTruth(value) {
    if (value){
        console.log("It's truth... " + value)
    }
}

talkOnlyTruth()
talkOnlyTruth(null)
talkOnlyTruth(undefined)
talkOnlyTruth(NaN)
talkOnlyTruth(0)
talkOnlyTruth(" ")
talkOnlyTruth(-1)
talkOnlyTruth('?')
talkOnlyTruth([1, 2])

