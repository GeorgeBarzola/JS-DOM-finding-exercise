// 1.)Select the section with an id of container without using querySelector.
// 2.)Select the section with an id of container using querySelector.
// 3.)Select all of the list items with a class of “second”.
// 4.)Select a list item with a class of third, but only the list item inside of the ol tag.
// 5.)Give the section with an id of container the text “Hello!”.
// 6.)Add the class main to the div with a class of footer.
// 7.)Remove the class main on the div with a class of footer.
// 8.)Create a new li element.
// 9.)Give the li the text “four”.
// 10.)Append the li to the ul element.
// 11.)Loop over all of the lis inside the ol tag and give them a background color of “green”.
// 12.)Remove the div with a class of footer.

// .1)
document.getElementById('#container');

// 2.)
document.querySelector('#container');

// 3.)
document.getElementsByClassName('.second');

// 4.)
document.querySelector('ol .third');

// 5.)
// const container = document.querySelector('#container')
// container.innerText = 'Hello!';

// 6.)
const footer = document.querySelector('.footer');
footer.classList.add ('main');

// 7.)
footer.classList.remove('main');

// 8.)
const newListItem = document.createElement('li');

// 9.)
newListItem.innerText = 'four'

// 10.)
const list = document.querySelector('ul');
list.appendChild(newListItem);

// 11.)
let insideOlist = document.querySelectorAll("ol li");

for(let i = 0; i < insideOlist.length; i++){
    insideOlist[i].style.backgroundColor = "green";
}

// 12.)
footer.remove()
