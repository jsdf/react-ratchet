# react-ratchet

React components for the [Ratchet](http://goratchet.com/components) UI Library

Used to build [Hacker News Mobile](http://hackernewsmobile.com/):

![Hacker News Mobile](http://i.imgur.com/LxPE8su.jpg)

## Documentation

### Title
```
@prop [className] {String} Merges with the Ratchet predefined CSS classes
```
Example:
```javascript
var Title = require('react-ratchet').Title;
class MyTitle extends React.Component {
  render() {
    return <Title>Hello World!</Title>
  }
}
```

### NavBar  
```
@prop [className] {String} Merges with the Ratchet predefined CSS classes
```
Example:
```javascript
var NavBar = require('react-ratchet').NavBar;
class MyNavBar extends React.Component {
  render() {
    return (
        <NavBar>
            <Title>Hello World!</Title>
        </NavBar>
    );
  }
}
```

### NavButton
```
@prop [right] {Boolean} The side of the nav the button will be displayed
@prop [href] {String} If defined creates an anchor, else defaults to a button
@prop [className] {String} Merges with the Ratchet predefined CSS classes
```
Example:
```javascript
var NavButton = require('react-ratchet').NavButton;
class MyNavButton extends React.Component {
  render() {
    return (
        <NavButton right href='./next'>
            Next
        </NavButton>
    );
  }
}
```

### TableView
```
@prop [className] {String} Merges with the Ratchet predefined CSS classes
```
Example:
```javascript
var TableView = require('react-ratchet').TableView;
var TableViewCell = require('react-ratchet').TableViewCell;
class MyTableView extends React.Component {
  render() {
    return (
        <TableView>
            <TableViewCell>My</TableViewCell>
            <TableViewCell>React</TableViewCell>
            <TableViewCell>Ratchet</TableViewCell>
            <TableViewCell>Table</TableViewCell>
        </TableView>
    );
  }
}
```

### TableViewCell
```
@prop [divider] {Boolean} Renders a divider cell
@prop [navigateRight] {Boolean} Right-wards chevron 
@prop [navigateLeft] {Boolean} Left-wards chevron
@prop [href] {String} Assigns the given href to the child anchor
@prop [className] {String} Merges with the Ratchet predefined CSS classes
```
Example:
```javascript
var TableViewCell = require('react-ratchet').TableViewCell;
class MyTableViewCell extends React.Component {
  render() {
    return <TableViewCell>Hello World!</TableViewCell>
  }
}
```

### Button
```
@prop [block] {Boolean} A block button
@prop [outlined] {Boolean} An outlined button
@prop [rStyle] {String} One of the btn-* CSS classes
@prop [className] {String} Merges with the Ratchet predefined CSS classes
```
Example:
```javascript
var Button = require('react-ratchet').Button;
class MyButton extends React.Component {
  render() {
    return <Button block rStyle='positive'>Hello World!</Button>
  }
}
```

### Badge
```
@prop [inverted] {Boolean} An inverted badge
@prop [rStyle] {String} One of the badge-* CSS classes
@prop [className] {String} Merges with the Ratchet predefined CSS classes
```
Example:
```javascript
var Badge = require('react-ratchet').Badge;
class MyBadge extends React.Component {
  render() {
    return <Badge rStyle='primary' inverted>42</Badge>
  }
}
```

### Icon
```
@prop [...] {Boolean} Any defined boolean prop will be taken for the icon name
@prop [className] {String} Merges with the Ratchet predefined CSS classes
```
Example:
```javascript
var Icon = require('react-ratchet').Icon;
class MyIcon extends React.Component {
  render() {
    return <Icon star-filled />
  }
}
```

### Toggle
```
@prop [active] {Boolean} Set the toggle to active
@prop [className] {String} Merges with the Ratchet predefined CSS classes
```
Example:
```javascript
var Toggle = require('react-ratchet').Toggle;
class MyToggle extends React.Component {
  render() {
    return <Toggle active />
  }
}
```
