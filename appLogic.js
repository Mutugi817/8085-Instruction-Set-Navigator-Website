
        const categories = [
            "Data Transfer", 
            "Arithmetic", 
            "Logical", 
            "Branching", 
            "Control/IO"
        ];

        const instructions = [
            { m: "MOV", cat: "Data Transfer", fmt: "MOV Rd, Rs / M", desc: "Move 8-bit data from Source (Rs/M) to Destination (Rd/M).", flags: [] },
            { m: "MVI", cat: "Data Transfer", fmt: "MVI R/M, Data", desc: "Move 8-bit Immediate Data into Register or Memory.", flags: [] },
            { m: "LXI", cat: "Data Transfer", fmt: "LXI Rp, Data16", desc: "Load 16-bit Immediate Data into Register Pair or SP.", flags: [] },
            { m: "LDA", cat: "Data Transfer", fmt: "LDA Addr16", desc: "Load Accumulator with content of memory address.", flags: [] },
            { m: "STA", cat: "Data Transfer", fmt: "STA Addr16", desc: "Store Accumulator content into memory address.", flags: [] },
            { m: "LHLD", cat: "Data Transfer", fmt: "LHLD Addr16", desc: "Load H and L registers directly from memory address.", flags: [] },
            { m: "SHLD", cat: "Data Transfer", fmt: "SHLD Addr16", desc: "Store H and L registers directly into memory address.", flags: [] },
            { m: "XCHG", cat: "Data Transfer", fmt: "XCHG", desc: "Exchange contents of HL pair with DE pair.", flags: [] },
            { m: "SPHL", cat: "Data Transfer", fmt: "SPHL", desc: "Move content of HL pair to Stack Pointer (SP).", flags: [] },
            { m: "PUSH", cat: "Data Transfer", fmt: "PUSH Rp", desc: "Push register pair content onto stack. SP decrements by 2.", flags: [] },
            { m: "POP", cat: "Data Transfer", fmt: "POP Rp", desc: "Pop top of stack into register pair. SP increments by 2.", flags: [] },

            { m: "ADD", cat: "Arithmetic", fmt: "ADD R/M", desc: "Add Register/Memory to Accumulator.", flags: ["S", "Z", "AC", "P", "CY"] },
            { m: "ADC", cat: "Arithmetic", fmt: "ADC R/M", desc: "Add Register/Memory and Carry to Accumulator.", flags: ["S", "Z", "AC", "P", "CY"] },
            { m: "ADI", cat: "Arithmetic", fmt: "ADI Data", desc: "Add Immediate Data to Accumulator.", flags: ["S", "Z", "AC", "P", "CY"] },
            { m: "ACI", cat: "Arithmetic", fmt: "ACI Data", desc: "Add Immediate Data and Carry to Accumulator.", flags: ["S", "Z", "AC", "P", "CY"] },
            { m: "SUB", cat: "Arithmetic", fmt: "SUB R/M", desc: "Subtract Register/Memory from Accumulator.", flags: ["S", "Z", "AC", "P", "CY"] },
            { m: "SBB", cat: "Arithmetic", fmt: "SBB R/M", desc: "Subtract Register/Memory and Borrow from Accumulator.", flags: ["S", "Z", "AC", "P", "CY"] },
            { m: "SUI", cat: "Arithmetic", fmt: "SUI Data", desc: "Subtract Immediate Data from Accumulator.", flags: ["S", "Z", "AC", "P", "CY"] },
            { m: "SBI", cat: "Arithmetic", fmt: "SBI Data", desc: "Subtract Immediate Data and Borrow from Accumulator.", flags: ["S", "Z", "AC", "P", "CY"] },
         
            { m: "INR", cat: "Arithmetic", fmt: "INR R/M", desc: "Increment Register/Memory by 1.", flags: ["S", "Z", "AC", "P"], note: "Affects all flags EXCEPT Carry." },
            { m: "DCR", cat: "Arithmetic", fmt: "DCR R/M", desc: "Decrement Register/Memory by 1.", flags: ["S", "Z", "AC", "P"], note: "Affects all flags EXCEPT Carry." },
            { m: "INX", cat: "Arithmetic", fmt: "INX Rp", desc: "Increment Register Pair by 1.", flags: [], note: "Does NOT affect any flags." },
            { m: "DCX", cat: "Arithmetic", fmt: "DCX Rp", desc: "Decrement Register Pair by 1.", flags: [], note: "Does NOT affect any flags." },
            { m: "DAD", cat: "Arithmetic", fmt: "DAD Rp", desc: "Double Add: Add RP to HL.", flags: ["CY"], note: "Only affects Carry flag." },
            { m: "DAA", cat: "Arithmetic", fmt: "DAA", desc: "Decimal Adjust Accumulator to BCD.", flags: ["S", "Z", "AC", "P", "CY"] },

         
            { m: "ANA", cat: "Logical", fmt: "ANA R/M", desc: "Logical AND R/M with Accumulator.", flags: ["S", "Z", "AC", "P", "CY"], note: "CY is always reset." },
            { m: "ANI", cat: "Logical", fmt: "ANI Data", desc: "Logical AND Immediate with Accumulator.", flags: ["S", "Z", "AC", "P", "CY"], note: "CY is always reset." },
            { m: "ORA", cat: "Logical", fmt: "ORA R/M", desc: "Logical OR R/M with Accumulator.", flags: ["S", "Z", "AC", "P", "CY"], note: "CY is always reset." },
            { m: "ORI", cat: "Logical", fmt: "ORI Data", desc: "Logical OR Immediate with Accumulator.", flags: ["S", "Z", "AC", "P", "CY"], note: "CY is always reset." },
            { m: "XRA", cat: "Logical", fmt: "XRA R/M", desc: "Exclusive-OR R/M with Accumulator.", flags: ["S", "Z", "AC", "P", "CY"], note: "CY is always reset." },
            { m: "XRI", cat: "Logical", fmt: "XRI Data", desc: "Exclusive-OR Immediate with Accumulator.", flags: ["S", "Z", "AC", "P", "CY"], note: "CY is always reset." },
            { m: "CMP", cat: "Logical", fmt: "CMP R/M", desc: "Compare R/M with Accumulator (Subtraction without store).", flags: ["S", "Z", "AC", "P", "CY"] },
            { m: "CPI", cat: "Logical", fmt: "CPI Data", desc: "Compare Immediate with Accumulator.", flags: ["S", "Z", "AC", "P", "CY"] },
            { m: "RLC", cat: "Logical", fmt: "RLC", desc: "Rotate Accumulator Left.", flags: ["CY"] },
            { m: "RRC", cat: "Logical", fmt: "RRC", desc: "Rotate Accumulator Right.", flags: ["CY"] },
            { m: "RAL", cat: "Logical", fmt: "RAL", desc: "Rotate Accumulator Left through Carry.", flags: ["CY"] },
            { m: "RAR", cat: "Logical", fmt: "RAR", desc: "Rotate Accumulator Right through Carry.", flags: ["CY"] },
            { m: "CMA", cat: "Logical", fmt: "CMA", desc: "Complement Accumulator (1's complement).", flags: [], note: "Does NOT affect flags." },
            { m: "STC", cat: "Logical", fmt: "STC", desc: "Set Carry Flag to 1.", flags: ["CY"], note: "Only affects Carry." },
            { m: "CMC", cat: "Logical", fmt: "CMC", desc: "Complement Carry Flag.", flags: ["CY"], note: "Only affects Carry." },

         
            { m: "JMP", cat: "Branching", fmt: "JMP Addr16", desc: "Unconditional Jump to address.", flags: [] },
            { m: "Jcond", cat: "Branching", fmt: "J(Z/NZ/C/NC...) Addr16", desc: "Conditional Jump based on flags (Zero, Carry, etc).", flags: [], note: "Checks flags, does not modify them." },
            { m: "CALL", cat: "Branching", fmt: "CALL Addr16", desc: "Call subroutine. Push PC to stack.", flags: [] },
            { m: "Ccond", cat: "Branching", fmt: "C(cond) Addr16", desc: "Conditional Call subroutine.", flags: [] },
            { m: "RET", cat: "Branching", fmt: "RET", desc: "Return from subroutine. Pop PC from stack.", flags: [] },
            { m: "Rcond", cat: "Branching", fmt: "R(cond)", desc: "Conditional Return.", flags: [] },
            { m: "RST", cat: "Branching", fmt: "RST n", desc: "Restart (Interrupt) to fixed memory vector.", flags: [] },
            { m: "PCHL", cat: "Branching", fmt: "PCHL", desc: "Load Program Counter with HL contents.", flags: [] },

         
            { m: "IN", cat: "Control/IO", fmt: "IN Port8", desc: "Input data from port to Accumulator.", flags: [] },
            { m: "OUT", cat: "Control/IO", fmt: "OUT Port8", desc: "Output Accumulator data to port.", flags: [] },
            { m: "HLT", cat: "Control/IO", fmt: "HLT", desc: "Halt processor.", flags: [] },
            { m: "NOP", cat: "Control/IO", fmt: "NOP", desc: "No Operation. Used for delays.", flags: [] },
            { m: "EI", cat: "Control/IO", fmt: "EI", desc: "Enable Interrupts.", flags: [] },
            { m: "DI", cat: "Control/IO", fmt: "DI", desc: "Disable Interrupts.", flags: [] },
            { m: "RIM", cat: "Control/IO", fmt: "RIM", desc: "Read Interrupt Mask.", flags: [] },
            { m: "SIM", cat: "Control/IO", fmt: "SIM", desc: "Set Interrupt Mask.", flags: [] }
        ];

        
        let appState = {
            filterCategory: 'All',
            searchQuery: '',
            selectedMnemonic: null
        };

     
        const dom = {
            filterContainer: document.getElementById('categoryFilters'),
            listContainer: document.getElementById('instructionList'),
            searchInput: document.getElementById('searchInput'),
            countDisplay: document.getElementById('countDisplay'),
            dMnemonic: document.getElementById('detailMnemonic'),
            dCategory: document.getElementById('detailCategory'),
            dFormat: document.getElementById('detailFormat'),
            dDesc: document.getElementById('detailDesc'),
            dFlagNote: document.getElementById('flagNote'),
            yearEl: document.getElementById('year'),
            flags: {
                S: document.getElementById('flagS'),
                Z: document.getElementById('flagZ'),
                AC: document.getElementById('flagAC'),
                P: document.getElementById('flagP'),
                CY: document.getElementById('flagCY'),
            }
        };

        
        function init() {
            renderCharts();
            renderFilters();
            renderList();
            setupListeners();
       
        }

        
        function renderCharts() {
      
            const catCounts = {};
            categories.forEach(c => catCounts[c] = 0);
            instructions.forEach(i => {
            
                const key = categories.find(c => i.cat.includes(c.split('/')[0])) || i.cat;
                if(catCounts[key] !== undefined) catCounts[key]++;
            });

            const flagCounts = { None: 0, Some: 0, All: 0 };
            instructions.forEach(i => {
                if (i.flags.length === 0) flagCounts.None++;
                else if (i.flags.length === 5) flagCounts.All++;
                else flagCounts.Some++;
            });

           
            new Chart(document.getElementById('categoryChart'), {
                type: 'doughnut',
                data: {
                    labels: Object.keys(catCounts),
                    datasets: [{
                        data: Object.values(catCounts),
                        backgroundColor: [
                            '#3b82f6',
                            '#f97316', 
                            '#10b981', 
                            '#8b5cf6', 
                            '#64748b' 
                        ],
                        borderWidth: 0
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: { position: 'bottom', labels: { boxWidth: 10, font: { size: 10 } } }
                    }
                }
            });

          
            new Chart(document.getElementById('flagChart'), {
                type: 'bar',
                data: {
                    labels: ['No Flags', 'Some Flags', 'All Flags'],
                    datasets: [{
                        label: 'Instruction Count',
                        data: [flagCounts.None, flagCounts.Some, flagCounts.All],
                        backgroundColor: ['#94a3b8', '#f59e0b', '#ef4444'],
                        borderRadius: 4
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: { beginAtZero: true, grid: { display: false } },
                        x: { grid: { display: false } }
                    },
                    plugins: { legend: { display: false } }
                }
            });
        }

        
        function renderFilters() {
            dom.filterContainer.innerHTML = '';
            
           
            const allBtn = createFilterChip('All');
            dom.filterContainer.appendChild(allBtn);

         
            categories.forEach(cat => {
                dom.filterContainer.appendChild(createFilterChip(cat));
            });
        }

        function createFilterChip(label) {
            const btn = document.createElement('button');
            btn.textContent = label;
            btn.className = `px-3 py-1 text-xs font-medium rounded-full border transition-colors ${
                appState.filterCategory === label ? 'chip-active' : 'chip-inactive'
            }`;
            btn.onclick = () => {
                appState.filterCategory = label;
                renderFilters(); 
                renderList();
            };
            return btn;
        }

     
        function renderList() {
            dom.listContainer.innerHTML = '';
            
            
            const filtered = instructions.filter(inst => {
                const matchesCat = appState.filterCategory === 'All' || inst.cat === appState.filterCategory;
                const matchesSearch = inst.m.toLowerCase().includes(appState.searchQuery.toLowerCase()) || 
                                      inst.desc.toLowerCase().includes(appState.searchQuery.toLowerCase());
                return matchesCat && matchesSearch;
            });

            dom.countDisplay.textContent = filtered.length;

            if (filtered.length === 0) {
                dom.listContainer.innerHTML = `<div class="p-8 text-center text-stone-400">No instructions found.</div>`;
                return;
            }

            filtered.forEach(inst => {
                const card = document.createElement('div');
                const isSelected = appState.selectedMnemonic === inst.m;
                
                card.className = `instruction-card p-3 rounded-lg border border-stone-100 bg-white cursor-pointer mb-2 transition-all ${
                    isSelected ? 'instruction-selected shadow-inner' : 'hover:border-orange-200'
                }`;
                
                card.innerHTML = `
                    <div class="flex justify-between items-center">
                        <span class="font-mono font-bold text-slate-800 ${isSelected ? 'text-orange-600' : ''}">${inst.m}</span>
                        <span class="text-[10px] text-stone-400 uppercase tracking-wide">${inst.cat}</span>
                    </div>
                    <div class="text-xs text-stone-500 mt-1 truncate">${inst.desc}</div>
                `;

                card.onclick = () => selectInstruction(inst);
                dom.listContainer.appendChild(card);
            });
        }

       
        function selectInstruction(inst) {
            appState.selectedMnemonic = inst.m;
            renderList();
            updateDetailPanel(inst);
        }

        function updateDetailPanel(inst) {
            dom.dMnemonic.textContent = inst.m;
            dom.dCategory.textContent = inst.cat;
            dom.dFormat.textContent = inst.fmt;
            dom.dDesc.textContent = inst.desc;
            dom.dFlagNote.textContent = inst.note || (inst.flags.length > 0 ? "Standard flag update logic applies." : "No status flags are modified by this instruction.");

            
            const allFlags = ['S', 'Z', 'AC', 'P', 'CY'];
            allFlags.forEach(flag => {
                const el = dom.flags[flag];
                if (inst.flags.includes(flag)) {
                    el.className = 'flag-box flag-active rounded p-2 border flex flex-col items-center justify-center transform scale-105';
                } else {
                    el.className = 'flag-box flag-inactive rounded p-2 border flex flex-col items-center justify-center opacity-50';
                }
            });
        }

        function setupListeners() {
            dom.searchInput.addEventListener('input', (e) => {
                appState.searchQuery = e.target.value;
                renderList();
            });
        }

        function updateYear() {
            year = new Date().getFullYear();
            dom.yearEl.textContent = year;
        }

        updateYear()

       
        init();
