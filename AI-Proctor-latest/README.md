# AI Proctor

An intelligent online exam proctoring system that uses computer vision and AI to detect violations in real-time.

## 🚀 Features

- **Face Detection**: Monitors for multiple faces and unauthorized participants
- **Gaze Tracking**: Detects when students look away from the screen
- **Device Detection**: Identifies phones, laptops, and other electronic devices
- **Head Pose Analysis**: Monitors head orientation and attention
- **Modern UI**: Clean, responsive interface with real-time alerts

## 🛠️ Tech Stack

**Frontend**: React + TypeScript + Tailwind CSS + Vite  
**Backend**: Python + OpenCV + MediaPipe + YOLOv8 + Flask

## 📋 Prerequisites

- Node.js (v14+)
- Python 3.8+
- Webcam access

## ⚡ Quick Start

1. **Clone & Install**
   ```bash
   git clone https://github.com/Rookiechan191/AI-Proctor.git
   cd AI-Proctor
   npm install
   cd backend && pip install -r requirements.txt
   ```

2. **Run the Application**
   ```bash
   # Terminal 1: Start backend
   cd backend && python main.py
   
   # Terminal 2: Start frontend
   npm run dev
   ```

3. **Access**: Open `http://localhost:5173` in your browser

## 🎯 Usage

1. Allow camera permissions when prompted
2. The system automatically monitors for violations:
   - Multiple faces in frame
   - Looking away from screen
   - Electronic devices
   - Head pose deviations

## ⚙️ Configuration

Adjust detection sensitivity in `backend/detection.py`:
- Device confidence: 0.35
- Face confidence: 0.5
- Head pose thresholds: 30° yaw, 20° pitch

## 📝 License

This project is licensed under the MIT License.

## 🤝 Contributing

Issues and pull requests are welcome!

