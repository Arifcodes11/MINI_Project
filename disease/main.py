import cv2
import json
import numpy as np
from tensorflow.keras.preprocessing.image import load_img, img_to_array
from tensorflow.keras.models import load_model
from flask import Flask, request, jsonify
import os

from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # This will enable CORS for all routes

model_path = "./model.h5"
model = load_model(model_path)

with open("labels_dict.json") as f:
    label_dict = json.load(f)

final_dict = {int(k): v for k, v in label_dict.items()}




@app.route('/upload', methods=['POST'])
def upload_image():
    if 'image' not in request.files:
        return jsonify({'error': 'No image found in the request'}), 400

    image = request.files['image']
    save_path = os.path.join("/home/aditya-kumar-mishra/Desktop/mini/disease", image.filename)
    image.save(save_path)

    # Load and preprocess the image
    test_image = cv2.imread(save_path)
    test_image = cv2.resize(test_image, (128, 128))
    test_image = img_to_array(test_image) / 255
    test_image = np.expand_dims(test_image, axis=0)

    # Predict the disease
    result = model.predict(test_image)
    print(result)
    predicted_val = np.argmax(result, axis=1)[0]
    print(predicted_val)
    predicted_disease = final_dict[int(predicted_val)]
    print(predicted_disease)

    return jsonify({'message': 'Thank you for the image!', 'predicted_disease': predicted_disease}), 200

if __name__ == '__main__':
    app.run(port=5050)