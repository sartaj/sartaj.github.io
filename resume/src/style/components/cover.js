export default `

/* Cover Container */

  .cover {
      width: 100%;
      height: 60mm;
      position: relative;
  }

/* Cover Image */

  .cover .cover-img {
    position: absolute;
    top: 0;
    left: 0;
    width: 210mm;
    height: 60mm;
    overflow: hidden;
  }

  .cover .cover-img img {
    width: 100%;
    position: absolute;
  }

/* Cover Text */

  .cover .cover-top {
    position: absolute;
    top: 0;
    right: 0;
  }

  .cover .cover-top,
  .cover .cover-contact {
    padding: 20pt;
  }

  .cover .cover-content {
    z-index: 2;

    text-align: right;
    color: white;
    opacity: 1;
  }

  .cover .cover-name {
    font-family: "Playfair Display";
    font-size: 30pt;
    font-weight: bold;
  }

  .cover .cover-title {
    font-family: "Bitter";
    font-size: 15pt;
    font-weight: 400;
  }

  .cover .cover-contact {
    font-size: 10pt;
    font-weight: 300;
    opacity: 0.8;

    position: absolute;
    bottom: 0;
    right: 0;
  }

  .cover .cover-contact div span {
    font-weight: bold;
  }

  .cover .cover-contact a {
    color: white;
    text-decoration: none;
  }

  .cover .cover-contact a:hover {
    text-decoration: underline;
  }

`
