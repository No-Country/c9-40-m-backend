const Avatar_and_Pdf_Services = require("../services/avatar_and_pdf.service");

const upLoadImage = async (req, res) => {
  try {
    let token = req.headers.authorization;
    token = token.replace("Bearer ", "");
    const tokendecode = jwt.verify(token, process.env.JWT_SECRET);
    const { id } = tokendecode;
    const imageUp = req.body;
    proyect.user_id = id;
    const result = await Avatar_and_Pdf_Services.UpLoadImage(imageUp);
    res.json(result);
  } catch (error) {
    res.status(400).json({ message: "error" });
  }
};

const deleteImage = async (req, res) => {
  try {
    let token = req.headers.authorization;
    token = token.replace("Bearer ", "");
    const tokendecode = jwt.verify(token, process.env.JWT_SECRET);
    const { id } = tokendecode;
    const idImage = req.params.id;
    const result = await Avatar_and_Pdf_Services.deleteImage(id, idImage);
  } catch (error) {
    res.status(400).json({ message: "error" });
  }
};

const updateImage = async (req, res) => {
  try {
    let token = req.headers.authorization;
    token = token.replace("Bearer ", "");
    const tokendecode = jwt.verify(token, process.env.JWT_SECRET);
    const { id } = tokendecode;
    const idImage = req.params.id;
    const newImage = req.body;
    const result = await Avatar_and_Pdf_Services.updateProyect(
      newImage,
      idImage,
      id
    );
  } catch (error) {
    res.status(400).json({ message: "error" });
  }
};

const getAllImage = async (req, res) => {
  try {
    let token = req.headers.authorization;
    token = token.replace("Bearer ", "");
    const tokendecode = jwt.verify(token, process.env.JWT_SECRET);
    const { id } = tokendecode;
    const result = await Avatar_and_Pdf_Services.getAllImage(id);
    res.json(result);
  } catch (error) {
    res.status(400).json({ message: "error" });
  }
};

const upLoadPdf = async (req, res) => {
  try {
    let token = req.headers.authorization;
    token = token.replace("Bearer ", "");
    const tokendecode = jwt.verify(token, process.env.JWT_SECRET);
    const { id } = tokendecode;
    const newPdf = req.body;
    newPdf.user_id = id;
    const result = await Avatar_and_Pdf_Services.upLoadPdf(newPdf);
    res.json(result);
  } catch (error) {
    res.status(400).json({ message: "error" });
  }
};

const deletePdf = async (req, res) => {
  try {
    let token = req.headers.authorization;
    token = token.replace("Bearer ", "");
    const tokendecode = jwt.verify(token, process.env.JWT_SECRET);
    const { id } = tokendecode;
    const idPdf = req.params.id;
    const result = await Avatar_and_Pdf_Services.deletePdf(id, idPdf);
    res.json(result);
  } catch (error) {
    res.status(400).json({ message: "error" });
  }
};

const updatePdf = async (req, res) => {
  try {
    let token = req.headers.authorization;
    token = token.replace("Bearer ", "");
    const tokendecode = jwt.verify(token, process.env.JWT_SECRET);
    const { id } = tokendecode;
    const idPdf = req.params.id;
    const newPdf = req.body;

    const result = await Avatar_and_Pdf_Services.updatePdf(newPdf, id, idPdf);
    res.json(result);
  } catch (error) {
    res.status(400).json({ message: "error" });
  }
};

const getAllPdf = async (req, res) => {
  try {
    let token = req.headers.authorization;
    token = token.replace("Bearer ", "");
    const tokendecode = jwt.verify(token, process.env.JWT_SECRET);
    const { id } = tokendecode;
    const result = await Avatar_and_Pdf_Services.getAllPdf(id);
    res.json(result);
  } catch (error) {
    res.status(400).json({ message: "error" });
  }
};

module.exports = {
  upLoadImage,
  deleteImage,
  updateImage,
  getAllImage,
  upLoadPdf,
  deletePdf,
  updatePdf,
  getAllPdf,
};
