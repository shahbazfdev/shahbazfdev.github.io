---
title: "AI-Driven Noise Identification and Reduction in Naval Mechanical Systems"
description: "Architecting a portable, web-based anomaly detection system using CRNNs and Flask to identify and reduce mechanical noise on warships."
pubDate: 2026-05-13
author: "Shahbaz Fareed"
tags: ["CRNN", "Flask", "Signal Processing", "SQLite", "Python"]
image: "/images/projects/noise-placeholder.jpg"
link: "https://github.com/shahbazfdev"
featured: true
---

## Executive Summary
[cite_start]Developed a machine learning system to detect, classify, and reduce abnormal mechanical noise onboard warships to maintain acoustic stealth[cite: 1520, 1521]. [cite_start]The solution replaces expensive, permanently installed hardware with a lightweight, portable web application backed by a Convolutional Recurrent Neural Network (CRNN)[cite: 1525, 1526].

## The Architecture Stack
* [cite_start]**Frontend:** HTML/JavaScript Web Interface [cite: 1648]
* [cite_start]**Backend API:** Python and Flask [cite: 1645, 1646]
* [cite_start]**Machine Learning:** Convolutional Recurrent Neural Network (CRNN) [cite: 1601]
* [cite_start]**Database:** SQLite for offline, local log storage [cite: 1647]
* [cite_start]**Signal Processing:** Log Mel Spectrograms [cite: 2118]

## The Engineering Challenge
[cite_start]Existing naval noise monitoring solutions, such as the HBK Self Noise Monitoring System and Microflown Acoustic Imaging, require permanent, highly complex hardware arrays that are extremely costly and lack portability[cite: 1756, 1759]. [cite_start]The architectural challenge was to build a system that could function using standard device microphones, process audio in real-time, and store diagnostic logs locally in an offline database for crew members operating without internet connectivity at sea[cite: 1636, 1785].

## The Execution
[cite_start]Instead of relying purely on classical Digital Signal Processing (DSP) filters, the application captures 3-second audio instances and normalizes them into Log Mel Spectrograms[cite: 1605, 2118, 2489]. [cite_start]These spectrograms are routed via a Flask backend into a hybrid CRNN model, which utilizes Convolutional Neural Networks (CNNs) for spatial feature extraction and Recurrent Neural Networks (RNNs) for temporal sequence analysis[cite: 1601, 2493]. 

```python
# Insert your actual Flask routing or Log Mel Spectrogram preprocessing logic here
@app.route('/upload_audio', methods=['POST'])
def process_noise():
    # Show how you fed the audio to the CRNN
    pass