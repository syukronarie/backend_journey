const convertLink = (link, type = "m") => {
    return link.replace("m.jpg", type + ".jpg");
};

module.exports = convertLink;