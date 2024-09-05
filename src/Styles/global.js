import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

* {
  box-sizing: border-box;
}

body {
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.textColor};
  margin: 0;
  padding: 0;
  transition: all 0.25s linear;
}

.canvas {
  display: grid;
  min-height: 100vh;
  grid-auto-flow: row;
  grid-template-rows: auto 1fr auto;
  gap: 0.5rem;
  padding: 2rem;
  width: 100vw;
  align-items: center;
  text-align: center;
}

.type-box {
  display: block;
  max-width: 1000px;
  height: 140px;
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;
}

.words {
  font-size: 32px;
  display: flex;
  flex-wrap: wrap;
  color: ${({ theme }) => theme.typeBoxText};
}

.word {
  margin: 5px;
  padding-right: 2px;
}

.hidden-input {
  opacity: 0;
}

.current {
  border-left: 2px solid;
  animation: blinking 1.5s infinite;
  animation-timing-function: ease-in-out;
}

@keyframes blinking {
  0% { border-left-color:${({ theme }) => theme.title}; }
  25% { border-left-color:${({ theme }) => theme.background}; }
  50% { border-left-color: ${({ theme }) => theme.title}; }
  75% { border-left-color:${({ theme }) => theme.background}; }
  100% { border-left-color:${({ theme }) => theme.title}; }
}

.current-right {
  border-right: 2px solid;
  animation: blinkingRight 1.5s infinite;
  animation-timing-function: ease-in-out;
}

@keyframes blinkingRight {
  0% { border-right-color: ${({ theme }) => theme.title}; }
  25% { border-right-color:${({ theme }) => theme.background}; }
  50% { border-right-color:${({ theme }) => theme.title}; }
  75% { border-right-color:${({ theme }) => theme.background}; }
  100% { border-right-color:${({ theme }) => theme.title}; }
}

.correct {
  color: ${({ theme }) => theme.title};
}

.incorrect {
  color: #e74c3c;  // A vibrant red for incorrect words
}

.upper-menu {
  display: flex;
  width: 1000px;
  margin-left: auto;
  margin-right: auto;
  font-size: 1.35rem;
  justify-content: space-between;
  padding: 0.5rem;
}

.modes {
  display: flex;
  gap: 0.4rem;
}

.time-mode {
  color: ${({ theme }) => theme.title}; // Use theme title color for time modes
  cursor: pointer;
}

.footer {
  width: 1000px;
  display: flex;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
  color: ${({ theme }) => theme.textColor}; // Footer text color based on theme
}


.stats-box{
  display: flex;
  width: 1000px;
  height:auto;
  margin-left: auto;
  margin-right: auto;
}

.left-stats{
  width:30%
  padding:30px;
}

.right-stats{
  width:70% 
}

.title{
font-size:20px;

color: ${({ theme }) => theme.title};


}

.subtitle{
font-size:30px;

}


.header{
    display: flex;
    width: 1000px;
    align-self: stretch;
    margin-left: auto;
    margin-right: auto;
    height: 80px;
    justify-content: space-between;
}

.logo{
  display: flex;
  gap: 10px;
  justify-content: start;
  align-items: start;
}

.logo-image{
    transform: scale(0.3);
    margin-top: -100px;
    margin-left: -90px;
    display: block;
}

.user-profile{
    width: 1000px;
    margin: auto;
    display: flex;
    min-height: 15rem;
    background: ${({theme})=>theme.typeBoxText};
    border-radius: 20px;
    justify-content: center;
    align-text: center;
}


.user{
  width: 50%;
  display: flex;
  margin-top: 30px;
  margin-bottom: 30px;
  font-size: 1.5rem;
  padding: 1rem;
  border-right: 2px solid;
}

.info{
  width: 60%;
  padding: 1rem;
  margin-top: 1rem;
}

.picture{
    width: 40%;
}

.total-tests{
    width: 50%;
    font-size: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
}

.graph, .table{
    width: 1000px;
    margin: auto;
}

.center-of-screen{
    display:flex;
    min-height:100vh;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 3rem;
}

.center-of-screen{
    display:flex;
    min-height:100vh;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 3rem;
}

.links {
  display: flex;

}

.links a {
  color: ${({ theme }) => theme.textColor}; /* Set color based on theme */
  text-decoration: none; /* Remove underline from links */
  transition: color 0.3s; /* Smooth transition for color change */
}

.links a:hover {
  color: ${({ theme }) => theme.title}; /* Change color on hover */
}


`;