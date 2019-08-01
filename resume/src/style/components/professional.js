export default `
.professional {

}

div.professional figure {
	margin-bottom: 5mm;
	transition: opacity .4s ease-in-out;
}

.focusable:hover {
  cursor: default;
}
.book:hover .focusable:not(:hover) {
	opacity: 0.4;
}

@media screen and (max-width: 750px) {
  .professional { column-gap: 0px; }
  .professional figure { width: 100%; }
}

.professional .company {
  font-size: 18pt;
  font-weight: 300;
  line-height: 24pt;
}

.professional .title {
  font-size: 10pt;
  text-transform: uppercase;
}
.professional .highlights li,
.professional .keywords {
  font-size: 10pt;
  opacity: 0.8;
}

.professional .keyword {
  font-style: italic;
}

.professional .highlights {
  margin: 7pt;
  padding-left: 10pt;
}

.keyword:after {
  content: ","
}
.keyword:last-child:after {
  content: ""
}
`
