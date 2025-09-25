# 🏢 Pixel Team Page

> 🎮 Interactive pixel art team page featuring animated office environments with employee biographies and engaging micro-interactions. Originally developed for easyname GmbH's corporate team showcase.

[![Demo](https://img.shields.io/badge/Demo-Live%20Preview-blue)](https://your-demo-url.com)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Made with Love](https://img.shields.io/badge/Made%20with-❤️-red.svg)](https://github.com/your-username)

## ✨ Features

### 🎮 **4 Interactive Environments**

- **2nd Floor Office** - Animated pixel employees with walking cycles
- **1st Floor Operations** - Interactive kitchen, meeting rooms, and workstations
- **Data Center** - Pac-Man style animations with server racks
- **Real-life Video** - Behind-the-scenes team footage

### 🎯 **Interactive Elements**

- 👥 **Click employees** for personal biographies and fun facts
- 🖱️ **Hover tooltips** on office objects (coffee machine, plants, etc.)
- 🎮 **Drag navigation** for exploring large office scenes
- ✨ **Smooth transitions** between different office floors
- 🎨 **CSS animations** with pixel-perfect character movements

### 🎨 **Technical Highlights**

- Pure CSS pixel art animations with sprite sheets
- LESS preprocessing with custom mixins and functions
- Responsive Bootstrap layout for all devices
- jQuery-powered interactions and drag mechanics
- Retina-ready @2x image support for crisp displays
- Cross-browser compatibility with fallbacks

## 📊 Project Stats

- 🎨 **200+** hand-crafted pixel art assets
- 👥 **20+** animated employee characters
- 🏢 **3** detailed office environments
- ⚡ **6,500+** lines of interactive code
- 🎮 **Multiple** gaming-inspired animations
- 📱 **Fully** responsive design

## 🚀 Quick Start

### Prerequisites

- Node.js and npm
- Bower (package manager)
- Modern web browser
- Local web server

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/pixel-team-page.git
cd pixel-team-page

# Install Bower globally (if not already installed)
npm install -g bower

# Install project dependencies
bower install
```

### Running the Project

```bash
# Option 1: Python 3 (recommended)
python3 -m http.server 8080

# Option 2: Python 2
python -m SimpleHTTPServer 8080

# Option 3: Node.js http-server
npx http-server -p 8080

# Option 4: PHP built-in server
php -S localhost:8080
```

### 🌐 Open in Browser

Navigate to: **http://localhost:8080**

## 🎮 How to Explore

1. **Navigate Tabs** - Click thumbnail images to switch between office floors
2. **Meet the Team** - Click on pixel characters to read employee biographies
3. **Interactive Objects** - Hover over items like plants, machines, and furniture
4. **Drag to Explore** - Large scenes support drag navigation
5. **Discover Easter Eggs** - Hidden animations and interactions throughout

## 📁 Project Structure

```
pixelpage/
├── 📄 index.html              # Main HTML file
├── 📁 js/
│   └── team.js                # Interactive logic and animations
├── 📁 less/
│   ├── main.less              # Core styles and layout
│   ├── team.less              # Team-specific styles and animations
│   └── functions.less         # LESS mixins and utilities
├── 📁 images/
│   └── team/
│       ├── people/            # Employee photos (real + pixel art)
│       ├── scenes/            # Office environment backgrounds
│       └── sprites/           # Character animations and objects
├── 📄 bower.json              # Dependency management
├── 📄 .gitignore              # Git exclusion rules
└── 📄 README.md               # This file
```

## 🛠️ Technologies Used

| Technology                                                                                     | Purpose              | Version |
| ---------------------------------------------------------------------------------------------- | -------------------- | ------- |
| ![HTML5](https://img.shields.io/badge/-HTML5-E34F26?logo=html5&logoColor=white)                | Structure & Layout   | HTML5   |
| ![CSS3](https://img.shields.io/badge/-CSS3-1572B6?logo=css3&logoColor=white)                   | Styling & Animations | CSS3    |
| ![LESS](https://img.shields.io/badge/-LESS-1D365D?logo=less&logoColor=white)                   | CSS Preprocessing    | 4.x     |
| ![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?logo=javascript&logoColor=black) | Interactions         | ES5+    |
| ![jQuery](https://img.shields.io/badge/-jQuery-0769AD?logo=jquery&logoColor=white)             | DOM Manipulation     | 2.1.x   |
| ![Bootstrap](https://img.shields.io/badge/-Bootstrap-7952B3?logo=bootstrap&logoColor=white)    | Responsive Framework | 3.2.x   |
| ![Bower](https://img.shields.io/badge/-Bower-EF5734?logo=bower&logoColor=white)                | Package Management   | Latest  |

### 🎨 Design & Assets

- **Hand-crafted Pixel Art** - Custom sprites and character animations
- **Responsive Design** - Mobile-first approach with Bootstrap grid
- **Cross-browser Support** - IE9+ compatibility with polyfills

## 🎭 Interactive Features Deep Dive

### Character Animations

- **Walking Cycles** - 4-frame sprite animations for realistic movement
- **Idle Animations** - Subtle breathing and blinking effects
- **Interactive States** - Click, hover, and activity-based animations

### Office Environments

- **Parallax Scrolling** - Depth perception in large scenes
- **Interactive Hotspots** - Discoverable elements throughout offices
- **Dynamic Lighting** - Day/night modes in data center

### Gaming Elements

- **Pac-Man Inspired** - Data center features classic arcade gameplay
- **Easter Eggs** - Hidden interactions and surprise animations
- **Achievement System** - Unlock content by exploring all areas

## 🌟 Highlights & Easter Eggs

- 🎮 **Pac-Man Data Center** - Classic arcade game mechanics in server room
- ☕ **Coffee Machine** - Interactive brewing animations
- 📞 **Ringing Phone** - Click to answer office calls
- 🌱 **Growing Plants** - Hover to see plant care animations
- 🖨️ **Working Printer** - Paper jam animations and printing effects
- 🏀 **Basketball Game** - Mini-game in break room area
- 🎯 **Paper Airplane** - Throwable office entertainment
- 🔥 **BBQ Grill** - Animated cooking sequences

## 🚀 Deployment Options

### 🌟 Recommended: Netlify

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy from project directory
netlify deploy --dir=.
netlify deploy --prod --dir=.
```

### 📦 Other Platforms

- **Vercel** - Zero-config deployment
- **GitHub Pages** - Free hosting for public repos
- **Surge.sh** - Simple static hosting
- **Firebase Hosting** - Google's hosting platform

## 🐛 Troubleshooting

### Common Issues & Solutions

**Dependencies missing**

```bash
bower install
```

**Styles not loading**

- Ensure you're running a local server (not opening file directly)
- Check that `less.min.js` is loaded correctly

**Images not showing**

- Verify all image paths exist in `images/team/` directory
- Check browser console for 404 errors

**Animations not working**

- Confirm JavaScript is enabled in browser
- Check for console errors in developer tools

### Browser Support

- ✅ **Chrome 30+**
- ✅ **Firefox 25+**
- ✅ **Safari 7+**
- ✅ **Edge 12+**
- ⚠️ **IE 9+** (with polyfills)

## 🤝 Contributing

We welcome contributions! Please see our contributing guidelines:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Development Setup

```bash
# Fork and clone the repo
git clone https://github.com/your-username/pixel-team-page.git

# Install dependencies
bower install

# Create feature branch
git checkout -b feature/your-feature-name
```

## 📜 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **easyname GmbH** - Original concept and design inspiration
- **Pixel Art Community** - Inspiration for character designs
- **Open Source Libraries** - jQuery, Bootstrap, LESS, and all dependencies
- **Web Gaming Community** - Pac-Man and retro gaming influences

## 📧 Contact & Support

- **Issues**: [GitHub Issues](https://github.com/your-username/pixel-team-page/issues)
- **Discussions**: [GitHub Discussions](https://github.com/your-username/pixel-team-page/discussions)
- **Email**: your-email@domain.com

---

<div align="center">

**Made with ❤️ and lots of ☕**

⭐ **Star this repo if you like it!** ⭐

[🔝 Back to Top](#-pixel-team-page)

</div>
