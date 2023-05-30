# Official NrPs Demonlist
Welcome! This is the source code for the NrPs private server daemon. If you are interested in how a particular mechanic is implemented or if you want to help in some way with the development, then you are in the right place. You can see the site itself [here](https://evayako.github.io/)


Some backgrounds were taken from global demonlist. You can look at their site [here](https://demonlist.org/). 

# For list moderators
### **How to add levels to the top?**
There have been big changes, the old ways of adding levels to the top no longer work!<br>
1. Open the js/add/ directory.
2. Open the file you need, for example addDemon.js.
3. Here, starting from the third line, you see the positions of the levels.
```js
addDemon.addLevel('iron heart', 'NEGATIV', 49);
addDemon.addLevel('BLACKOUT', 'NEGATIV', 37);
addDemon.addLevel('sakupen hell v2', 'r1val', 99);
addDemon.addLevel('Override', 'WerTaZ', 93);
addDemon.addLevel('Lout', 'vitek8', 69);
addDemon.addLevel('Six Cubes', 'viteck8', 61);
addDemon.addLevel('Slow Motion', 'Elytra Clutch', 88);
```
To manage the sheet, you can swap rows, delete the old one and create new ones.<br>
For example, let's add a new daemon. Open the addDemon.js file, copy one of the several pre-made lines, and paste it. Now we are only interested in the information between the brackets.
- The first parameter is the name of the level. (Must be written in quotes)
- The second parameter is the nickname of the level creator. (Must be written in quotes)
- The third parameter is the level id.
I got something like this
```js
addDemon.addLevel('Ladno', 'Prohladno', 128);
```
 
### **How to add a record under the level?**
1. Open the file with the level you need in the ./lvls/ directory.
2. Find the block of code with the table. It will look something like this:
```js
  <table>
    <tr class="first-tr">
      <td><h5>Player</h5></td>
      <td><h5>Progress</h5></td>
      <td><h5>Proofs</h5></td>
    </tr></div>
    <tr>
      <td>Name</td>
      <td>100%</td>
      <td><a href="#">YouTube</a></td>
    </tr>
  </table>
```
  3. To add a new record, you must copy the last block of <tr> tags. After that, paste it after the last <tr> tag block.
  4. It remains only to change the nickname, record and link to proofs.
 
 If you still do not understand how to interact with the site, watch [this video](https://youtu.be/5OBiuVxg6dI)
