# Starting React series

**_Imp Links_**
[React fiber architecture](https://github.com/acdlite/react-fiber-architecture)

# What is reconciliation?

`The algorithm React uses to diff one tree with another to determine which parts need to be changed.`

# Reconciliation versus rendering or virtual DOM

`The DOM is just one of the rendering environments React can render to, the other major targets being native iOS and Android views via React Native. (This is why "virtual DOM" is a bit of a misnomer.)
The reason it can support so many targets is because React is designed so that reconciliation and rendering are separate phases. The reconciler does the work of computing which parts of a tree have changed; the renderer then uses that information to actually update the rendered app.`

# What is a fiber?

- pause work and come back to it later.
- assign priority to different types of work.
- reuse previously completed work.
- abort work if it's no longer needed.

<!-- Markdown cheatsheet -->

normal text

<!-- we can use # - h1 to ###### - h6  -->

# Heading 1

## Heading 2

_Italics_

**Strong/Bold**

~~1000~~ **999**

Links
[Hey this is google](www.google.com "google")

Images
![this is img](https://learncodeonline.in/mascot.png "LCO")
![Project](hhttps://learncodeonline.in/gitone.png "Project")
![Coder](https://learncodeonline.in/gittwo.png "Coder")

Use `for` loop

```JS
const user = "Veer";
console.log("user");
```

---

| Head1 | Head2 | Head3 |
| ----- | ----- | ----- |
| one   | two   | three |

---

> Keep smiling & work harder

1. list one
2. list two
3. list three
   4.list four

- list five
