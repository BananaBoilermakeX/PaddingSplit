import companyLogo from './multiplebananas.svg'
import arrow from './whitedownarrwo.png';

export function Index() {

  return <div>

<body>

<div class="parallax">
  <img class="mainLogo" src={companyLogo} alt="Banana Logo" />
  <p class="name123">Padding Split</p>
</div>

<a class="theDown" href="#down"><div class="downArrow bounce"><img width="40" height="40" alt="" src={arrow} /></div></a>

<div id = "down" class="overlay"></div>

<footer class="footer"><p>Created by the Banana Bandits: Sean Choi, Chinmay Bansal, Jean-Pierre Ciotta, Sam Ahrens</p></footer>

</body>

  </div>;
}
