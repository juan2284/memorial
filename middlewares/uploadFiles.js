import multer from 'multer';
import { dirname, extname, join } from 'path';
import { fileURLToPath } from 'url';

// Definir las opciones para Multer
const CURRENT_DIR = dirname(fileURLToPath(import.meta.url));
// Definir array con los mimetypes permitidos
const MIMETYPES = ['image/jpeg'];

const multerUpload = multer({
  // Definir las configuraciones de Multer
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, join(CURRENT_DIR, '../public/img/'));
    },
    filename: (req, file, cb) => {
      const fileExtension = extname(file.originalname);
      const fileName = file.originalname.split(fileExtension)[0];

      cb(null, `${fileName + fileExtension}`);
    }
  }),
  fileFilter: (req, file, cb) => {
    if (MIMETYPES.includes(file.mimetype)) cb(null, true)
    else cb(new Error(`Solo se permiten archivos con la extensión ${MIMETYPES.join(' ')}.`))
  },
  limits: {
    fileSize: 2000000
  }
});

export default multerUpload;