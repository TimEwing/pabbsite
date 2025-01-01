
const cannedResponses = [
    "thats nice bro good shit",
    "hell yeah bro",
    "cowabunga dude",
    "sick venue dude",
    "bet",
    "hell yeah homie",
    "ill be there",
    "far out",
    "dope",
    "oh shit i love that place, ill be there",
    "lets gooooo",
    "count me in fam",
    "straight fire",
    "yo thats whats up",
    "radical my dude",
    "im so down",
    "totally rad",
    "im 100% in",
    "say less fam",
    "big moves right there",
    "thats what im talking about",
    "solid plan homie",
    "hype",
    "legit af",
    "cant wait fam",
    "absolutely crushing it",
    "based af",
];


function addMessage(message) {
    $("#msgbox").append(`
        <div class="msg">
            <img src="/assets/images/bomb.png">
            <div class="bubble left">
                ${message}
            </div>
        </div>
    `);
}

function addReply(message) {
    $("#msgbox").append(`
        <div class="msg">
            <div></div>
            <div class="bubble right">
                ${message}
            </div>
        </div>
    `);
}

console.log($("#sendbutton"));

// Add new message on send
$("#sendbutton").click(function() {
    let msg = $("#msgtext").val();
    console.log(msg);
    if(msg.length > 0) {
        addReply(msg);
        $("#msgtext").val("");
    }
});

// Load messages
$.ajax({
    url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vR07lQ71sFym0zbIsg1YXCerMecfRO9lNxmeQpJ6AtPR6ZyLBjntlCoKn0LRBGGDL-4FxqreyTZm6D3/pub?output=tsv",
    dataType: "text",
    success: function(data) {
        const upcomingEvents = data.split(/\r?\n|\r/);

        if(data.length > 0) {
            addMessage("Yo, check out these upcoming gigs:");
        }

        let replyIndex = Math.floor(Math.random() * cannedResponses.length);

        upcomingEvents.forEach(event => {
            const splitEvent = event.split("\t");
            const datestr = splitEvent[0]
            const date = (new Date(datestr))
            const summary = splitEvent[1]
            const description = splitEvent[2];
            const location = splitEvent[3];
            // only assign time if the date string has a : in it
            const time = /:/.test(datestr) ? "at " + date.toLocaleTimeString([], {hour: "numeric", minute:"2-digit"}) : "";
            // Wrap image links in an image tag so they look pretty
            const descriptionWithImages = description.replace(/(https?:\/\/\S+)/g, '<br><img class="msgimg" src="$1"><br>');

            addMessage(`
                <b> ${summary} </b>
                <br>
                ${date.toDateString()} ${time}
                ${location ? "<br>" + location : ""}
                ${descriptionWithImages ? "<br>" + descriptionWithImages : ""}
            `);

            // Add random replies
            addReply(cannedResponses[replyIndex]);
            replyIndex = (replyIndex + 1) % cannedResponses.length;
        });
    },
});
