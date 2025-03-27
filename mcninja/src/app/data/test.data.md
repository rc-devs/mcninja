```ts

let tech = {
      id: 't1',
      title: 'Lead Hand Punch',
      belt: 'Tan',
      execution: 'The lead hand punch is a snapping straight punch executed by the forward or lead hand. It is a fast, unexpected punch designed to stun an aggressor and to set up for a follow-on techniques. A lead hand punch conceals movement and allows you to get close to the aggressor'
      executionSteps: ['Assume the basic warrior stance.', 'Snap your lead hand out to nearly full extension, while rotating your palm to the deck.', 'Keep your rear hand in place to protect your head.', 'Rapidly retract to the basic warrior stance.']
      proTip: "A common mistake is to pull the fist back low, leaving you open to a counter attack. Ensure you do not hyperextend your elbows",
      video: {
        title: "YouTube video player"
        width:560
        height:315
        url: "https://www.youtube.com/embed/8Oxwfhd_L0Q?si=ggknHEo16ij2KbMT"
      }
      mastered: false,
    }

```

```html

<div class.card-container>
    @for (t of tech; track) {
        <!-- whatever html using dotnotaion -->
         {{tech.title}}
         @for (e of executionSteps; track){
            <li> {{e}} </li>
         }
    }

    </div>

```

```html

<form>
    <input placeholder>
    <!-- follow datastructure -->

```
