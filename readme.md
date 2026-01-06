# 8085 Instruction Set Navigator 🚀

A high-performance, interactive web application designed to visualize and decode the Intel 8085 microprocessor's instruction set. This tool moves beyond static tables, offering a dynamic environment for students and engineers to explore CPU architecture.

---

## 📌 Project Architecture

The application is built on a "Scaffold-to-Detail" philosophy, ensuring that the sheer volume of the 8085 instruction set remains manageable and intuitive.

### 1. Header & Context
The entry point provides immediate branding and establishes the architectural scope of the tool.

### 2. Analytical Dashboard
Using **Chart.js**, this section provides "mental scaffolding" by visualizing:
* **Category Distribution:** A breakdown of instructions (Data Transfer, Arithmetic, Logical, Branch, etc.).
* **Flag Interactions:** Insights into how many instructions modify the Processor Status Word (PSW).

### 3. Explorer Section
The core interaction hub, featuring:
* **Left/Top Controls:** Instant search and category-based filtering.
* **Center Scroll:** A performant list of all 246 opcodes.
* **Instruction Decoder (Sticky):** A dedicated panel that simulates the hardware effect of a selected instruction.



---

## 🛠 Technical Implementation

### **The Instruction Decoder**
The standout feature of this app. When an instruction is selected, the decoder visually breaks down:
* **Flag Simulation:** A visual representation of the Flag Register ($S, Z, AC, P, CY$).
* **Operand Analysis:** Explanations of immediate data, register addressing, or memory pointers.
* **Machine Cycles:** Detailed T-state and Byte counts for timing analysis.



### **Tech Stack**
* **Engine:** JavaScript (ES6+)
* **Styling:** CSS3 (Flexbox & Grid for the sticky decoder layout)
* **Visuals:** Chart.js
* **Data:** Structured JSON Instruction Mapping

---

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone [https://github.com/Mutugi817/8085-Instruction-Set-Navigator-Website](https://github.com/Mutugi817/8085-Instruction-Set-Navigator-Website)