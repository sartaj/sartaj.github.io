export default `
* {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

.grid {
  width: 99%;
  margin-left: auto;
  margin-right: auto;
}
.grid:after {
  /* Or @extend clearfix */
  content: "";
  display: table;
  clear: both;
}

[class*='col-'] {
  float: left;
  padding-right: 20px;
}
.grid [class*='col-']:last-of-type {
  padding-right: 0;
}

.col-2third {
  width: 66.66%;
}

.col-third {
  width: 33.33%;
}

.col-half {
  width: 50%;
}

.col-quarter {
  width: 25%;
}

.col-eighth {
  width: 12.5%;
}

* {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

.grid {
  width: 99%;
  margin-left: auto;
  margin-right: auto;
}
.grid:after {
  /* Or @extend clearfix */
  content: "";
  display: table;
  clear: both;
}

[class*='col-'] {
  float: left;
  padding-right: 20px;
}
.grid [class*='col-']:last-of-type {
  padding-right: 0;
}
`
