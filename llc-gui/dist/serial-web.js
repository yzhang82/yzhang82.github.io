"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var MCUWebSerial = /** @class */ (function () {
    function MCUWebSerial() {
        var _this = this;
        this.encoder = new TextEncoder();
        this.decoder = new TextDecoder();
        this.connectButtonElem = document.getElementById('connect-to-serial');
        this.fileInput = document.getElementById('fileField');
        this.messageButtons = document.querySelectorAll('.message-button');
        this.logMessageContainer = document.getElementById('commentField');
        this.exportButton = document.getElementById('exportFile');
        this.readButton = document.getElementById('read-data');
        this.writeButton = document.getElementById('write-data');
        this.dlAnchorElem = document.getElementById('downloadAnchorElem');
        this.periodInput = document.getElementById('periodField');
        this.pri1reInput = document.getElementById('pri1reField');
        this.pri1feInput = document.getElementById('pri1feField');
        this.pri2reInput = document.getElementById('pri2reField');
        this.pri2feInput = document.getElementById('pri2feField');
        this.periodText = document.getElementById('periodText');
        this.pri1reText = document.getElementById('pri1reText');
        this.pri1feText = document.getElementById('pri1feText');
        this.pri2reText = document.getElementById('pri2reText');
        this.pri2feText = document.getElementById('pri2feText');
        this.pri1phInput = document.getElementById('pri1phField');
        this.pri1dcInput = document.getElementById('pri1dcField');
        this.pri2phInput = document.getElementById('pri2phField');
        this.pri2dcInput = document.getElementById('pri2dcField');
        this.sec1phInput = document.getElementById('sec1phField');
        this.sec1dcInput = document.getElementById('sec1dcField');
        this.sec2phInput = document.getElementById('sec2phField');
        this.sec2dcInput = document.getElementById('sec2dcField');
        this.pri1phText = document.getElementById('pri1phText');
        this.pri1dcText = document.getElementById('pri1dcText');
        this.pri2phText = document.getElementById('pri2phText');
        this.pri2dcText = document.getElementById('pri2dcText');
        this.sec1phText = document.getElementById('sec1phText');
        this.sec1dcText = document.getElementById('sec1dcText');
        this.sec2phText = document.getElementById('sec2phText');
        this.sec2dcText = document.getElementById('sec2dcText');
        this.scale = 3.3 / 4096;
        this.pwmClock = 4e9;
        this.BUCK_ISNS_FEEDBACK_GAIN = 0.01;
        this.perInt = 0;
        this.connectButtonElem.onclick = function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.init()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        this.fileInput.onchange = function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.fileInput.files != null)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.fileChange(this.fileInput.files[0])];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        }); };
        this.exportButton.onclick = function () {
            var data = { "Per": parseInt(_this.periodInput.value),
                "psPri": parseInt(_this.pri1phInput.value),
                "psPri_2": parseInt(_this.pri2phInput.value),
                "dutyPri": parseInt(_this.pri1dcInput.value), "dutyPri_2": parseInt(_this.pri2dcInput.value),
                "dt1Re": parseInt(_this.pri1reInput.value), "dt1Fe": parseInt(_this.pri1feInput.value),
                "dt1Re_2": parseInt(_this.pri2reInput.value), "dt1Fe_2": parseInt(_this.pri2feInput.value),
                "psSec": parseInt(_this.sec1phInput.value), "psSec_2": parseInt(_this.sec2phInput.value),
                "dutySec": parseInt(_this.sec1dcInput.value), "dutySec_2": parseInt(_this.sec2dcInput.value) };
            // console.log(data);
            var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(data));
            _this.dlAnchorElem.setAttribute("href", dataStr);
            _this.dlAnchorElem.setAttribute("download", "LLC-GUI-timing.json");
            _this.dlAnchorElem.click();
        };
        this.readButton.onclick = function () {
            _this.write('R');
            _this.getData();
        };
        this.periodInput.addEventListener('input', function () {
            var perIntn = parseInt(_this.periodInput.value);
            if (perIntn & 1) {
                if (perIntn > _this.perInt) {
                    perIntn++;
                }
                else {
                    perIntn--;
                }
                _this.periodInput.value = String(perIntn);
            }
            _this.perInt = perIntn;
            if (perIntn > 0) {
                var freqCalc = _this.pwmClock / perIntn / 1e6;
                _this.periodText.innerHTML = "= " + (perIntn / 4).toFixed(2) + " ns ( " + (freqCalc.toFixed(3)) + " MHz)";
                var dctemp = parseInt(_this.pri1dcInput.value);
                var dutyInt = _this.perInt / 2 + dctemp;
                _this.pri1dcText.innerHTML = "= " + (dctemp / 4).toFixed(2) + " ns (" + (100.0 * dutyInt / _this.perInt).toFixed(3) + " %)";
                dctemp = parseInt(_this.pri2dcInput.value);
                dutyInt = _this.perInt / 2 + dctemp;
                _this.pri2dcText.innerHTML = "= " + (dctemp / 4).toFixed(2) + " ns (" + (100.0 * dutyInt / _this.perInt).toFixed(3) + " %)";
                dctemp = parseInt(_this.sec1dcInput.value);
                dutyInt = _this.perInt / 2 + dctemp;
                _this.sec1dcText.innerHTML = "= " + (dctemp / 4).toFixed(2) + " ns (" + (100.0 * dutyInt / _this.perInt).toFixed(3) + " %)";
                dctemp = parseInt(_this.sec2dcInput.value);
                dutyInt = _this.perInt / 2 + dctemp;
                _this.sec2dcText.innerHTML = "= " + (dctemp / 4).toFixed(2) + " ns (" + (100.0 * dutyInt / _this.perInt).toFixed(3) + " %)";
            }
        });
        this.pri1reInput.addEventListener('input', function () {
            var dt1re = parseInt(_this.pri1reInput.value);
            if (dt1re > 255) {
                dt1re = 255;
                _this.pri1reInput.value = String('255');
            }
            if (dt1re < 0) {
                dt1re = 0;
                _this.pri1reInput.value = String('0');
            }
            _this.pri1reText.innerHTML = "= " + (dt1re / 4).toFixed(2) + " ns";
        });
        this.pri1feInput.addEventListener('input', function () {
            var dt1fe = parseInt(_this.pri1feInput.value);
            if (dt1fe > 255) {
                dt1fe = 255;
                _this.pri1feInput.value = String('255');
            }
            if (dt1fe < 0) {
                dt1fe = 0;
                _this.pri1feInput.value = String('0');
            }
            _this.pri1feText.innerHTML = "= " + (dt1fe / 4).toFixed(2) + " ns";
        });
        this.pri2reInput.addEventListener('input', function () {
            var dt2re = parseInt(_this.pri2reInput.value);
            if (dt2re > 255) {
                dt2re = 255;
                _this.pri2reInput.value = String('255');
            }
            if (dt2re < 0) {
                dt2re = 0;
                _this.pri2reInput.value = String('0');
            }
            _this.pri2reText.innerHTML = "= " + (dt2re / 4).toFixed(2) + " ns";
        });
        this.pri2feInput.addEventListener('input', function () {
            var dt2fe = parseInt(_this.pri2feInput.value);
            if (dt2fe > 255) {
                dt2fe = 255;
                _this.pri2feInput.value = String('255');
            }
            if (dt2fe < 0) {
                dt2fe = 0;
                _this.pri2feInput.value = String('0');
            }
            _this.pri2feText.innerHTML = "= " + (dt2fe / 4).toFixed(2) + " ns";
        });
        this.pri1phInput.addEventListener('input', function () {
            var pri1ph = parseInt(_this.pri1phInput.value);
            if (pri1ph > 255) {
                pri1ph = 255;
                _this.pri1phInput.value = String('255');
            }
            if (pri1ph < 0) {
                pri1ph = 0;
                _this.pri1phInput.value = String('0');
            }
            _this.pri1phText.innerHTML = "= " + (pri1ph / 4).toFixed(2) + " ns";
        });
        this.pri2phInput.addEventListener('input', function () {
            var pri2ph = parseInt(_this.pri2phInput.value);
            if (pri2ph > 255) {
                pri2ph = 255;
                _this.pri2phInput.value = String('255');
            }
            if (pri2ph < 0) {
                pri2ph = 0;
                _this.pri2phInput.value = String('0');
            }
            _this.pri2phText.innerHTML = "= " + (pri2ph / 4).toFixed(2) + " ns";
        });
        this.sec1phInput.addEventListener('input', function () {
            var sec1ph = parseInt(_this.sec1phInput.value);
            if (sec1ph > 255) {
                sec1ph = 255;
                _this.sec1phInput.value = String('255');
            }
            if (sec1ph < 0) {
                sec1ph = 0;
                _this.sec1phInput.value = String('0');
            }
            _this.sec1phText.innerHTML = "= " + (sec1ph / 4).toFixed(2) + " ns";
        });
        this.sec2phInput.addEventListener('input', function () {
            var sec2ph = parseInt(_this.sec2phInput.value);
            if (sec2ph > 255) {
                sec2ph = 255;
                _this.sec2phInput.value = String('255');
            }
            if (sec2ph < 0) {
                sec2ph = 0;
                _this.sec2phInput.value = String('0');
            }
            _this.sec2phText.innerHTML = "= " + (sec2ph / 4).toFixed(2) + " ns";
        });
        this.pri1dcInput.addEventListener('input', function () {
            var pri1dc = parseInt(_this.pri1dcInput.value);
            if (pri1dc > 127) {
                pri1dc = 127;
                _this.pri1dcInput.value = String('127');
            }
            if (pri1dc < -128) {
                pri1dc = -128;
                _this.pri1dcInput.value = String('-128');
            }
            if (_this.perInt > 0) {
                var dutyInt = _this.perInt / 2 + pri1dc;
                _this.pri1dcText.innerHTML = "= " + (pri1dc / 4).toFixed(2) + " ns (" + (100.0 * dutyInt / _this.perInt).toFixed(3) + " %)";
            }
        });
        this.pri2dcInput.addEventListener('input', function () {
            var pri2dc = parseInt(_this.pri2dcInput.value);
            if (pri2dc > 127) {
                pri2dc = 127;
                _this.pri2dcInput.value = String('127');
            }
            if (pri2dc < -128) {
                pri2dc = -128;
                _this.pri2dcInput.value = String('-128');
            }
            if (_this.perInt > 0) {
                var dutyInt = _this.perInt / 2 + pri2dc;
                _this.pri2dcText.innerHTML = "= " + (pri2dc / 4).toFixed(2) + " ns (" + (100.0 * dutyInt / _this.perInt).toFixed(3) + " %)";
            }
        });
        this.sec1dcInput.addEventListener('input', function () {
            var sec1dc = parseInt(_this.sec1dcInput.value);
            if (sec1dc > 127) {
                sec1dc = 127;
                _this.sec1dcInput.value = String('127');
            }
            if (sec1dc < -128) {
                sec1dc = -128;
                _this.sec1dcInput.value = String('-128');
            }
            if (_this.perInt > 0) {
                var dutyInt = _this.perInt / 2 + sec1dc;
                _this.sec1dcText.innerHTML = "= " + (sec1dc / 4).toFixed(2) + " ns (" + (100.0 * dutyInt / _this.perInt).toFixed(3) + " %)";
            }
        });
        this.sec2dcInput.addEventListener('input', function () {
            var sec2dc = parseInt(_this.sec2dcInput.value);
            if (sec2dc > 127) {
                sec2dc = 127;
                _this.sec2dcInput.value = String('127');
            }
            if (sec2dc < -128) {
                sec2dc = -128;
                _this.sec2dcInput.value = String('-128');
            }
            if (_this.perInt > 0) {
                var dutyInt = _this.perInt / 2 + sec2dc;
                _this.sec2dcText.innerHTML = "= " + (sec2dc / 4).toFixed(2) + " ns (" + (100.0 * dutyInt / _this.perInt).toFixed(3) + " %)";
            }
        });
        this.writeButton.onclick = function () {
            var data = { "Per": parseInt(_this.periodInput.value),
                "psPri": parseInt(_this.pri1phInput.value),
                "psPri_2": parseInt(_this.pri2phInput.value),
                "dutyPri": parseInt(_this.pri1dcInput.value), "dutyPri_2": parseInt(_this.pri2dcInput.value),
                "dt1Re": parseInt(_this.pri1reInput.value), "dt1Fe": parseInt(_this.pri1feInput.value),
                "dt1Re_2": parseInt(_this.pri2reInput.value), "dt1Fe_2": parseInt(_this.pri2feInput.value),
                "psSec": parseInt(_this.sec1phInput.value), "psSec_2": parseInt(_this.sec2phInput.value),
                "dutySec": parseInt(_this.sec1dcInput.value), "dutySec_2": parseInt(_this.sec2dcInput.value) };
            _this.writeE(_this.encodeData('t', data));
            _this.verifyResponse('t');
        };
    }
    MCUWebSerial.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var now, port_1, signals, msg, err_1, msg, msg;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        now = new Date();
                        if (!('serial' in navigator)) return [3 /*break*/, 7];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 5, , 6]);
                        return [4 /*yield*/, navigator.serial.requestPort()];
                    case 2:
                        port_1 = _a.sent();
                        return [4 /*yield*/, port_1.open({ baudRate: 9600 })];
                    case 3:
                        _a.sent(); // `baudRate` was `baudrate` in previous versions.
                        this.writer = port_1.writable.getWriter();
                        this.reader = port_1.readable.getReader();
                        return [4 /*yield*/, port_1.getSignals()];
                    case 4:
                        signals = _a.sent();
                        console.log(signals);
                        this.systemStat = 1;
                        // enable control buttons
                        this.messageButtons.forEach(function (button) {
                            button.removeAttribute('disabled');
                        });
                        msg = now.getHours() + ":" + now.getMinutes() + "  Connected.\n";
                        this.logMessageContainer.value += msg;
                        port_1.addEventListener('disconnect', function () {
                            // Remove `e.target` from the list of available ports.
                            var now = new Date();
                            var msg = now.getHours() + ":" + now.getMinutes() + "  Serial port disconnected.\n";
                            _this.logMessageContainer.value += msg;
                            // disable control buttons
                            _this.messageButtons.forEach(function (button) {
                                button.setAttribute('disabled', '');
                            });
                            _this.connectButtonElem.innerText = "Connect";
                            _this.connectButtonElem.onclick = function () { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, this.init()];
                                        case 1:
                                            _a.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            }); };
                            console.log('Serial port disconnected.');
                        });
                        //change connect button function
                        this.connectButtonElem.innerText = "Disconnect";
                        this.connectButtonElem.setAttribute('class', 'redBtn');
                        this.connectButtonElem.onclick = function () { return __awaiter(_this, void 0, void 0, function () {
                            var now, msg;
                            var _this = this;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        this.reader.releaseLock();
                                        try {
                                            this.reader.cancel();
                                        }
                                        catch (err) {
                                            console.error('No reader to cancel');
                                        }
                                        this.writer.releaseLock();
                                        return [4 /*yield*/, port_1.close()];
                                    case 1:
                                        _a.sent();
                                        this.connectButtonElem.innerText = "Connect";
                                        this.connectButtonElem.removeAttribute('class');
                                        this.connectButtonElem.onclick = function () { return __awaiter(_this, void 0, void 0, function () {
                                            return __generator(this, function (_a) {
                                                switch (_a.label) {
                                                    case 0: return [4 /*yield*/, this.init()];
                                                    case 1:
                                                        _a.sent();
                                                        return [2 /*return*/];
                                                }
                                            });
                                        }); };
                                        // disable control buttons
                                        this.messageButtons.forEach(function (button) {
                                            button.setAttribute('disabled', '');
                                        });
                                        now = new Date();
                                        msg = now.getHours() + ":" + now.getMinutes() + "  User interrupt. Disconnected.\n";
                                        this.logMessageContainer.value += msg;
                                        this.logMessageContainer.scrollTop = this.logMessageContainer.scrollHeight;
                                        return [2 /*return*/];
                                }
                            });
                        }); };
                        return [3 /*break*/, 6];
                    case 5:
                        err_1 = _a.sent();
                        this.systemStat = 2;
                        msg = now.getHours() + ":" + now.getMinutes() + "  An error occured while trying to open the serial port.\n";
                        this.logMessageContainer.value += msg;
                        this.logMessageContainer.scrollTop = this.logMessageContainer.scrollHeight;
                        return [3 /*break*/, 6];
                    case 6: return [3 /*break*/, 8];
                    case 7:
                        msg = now.getHours() + ":" + now.getMinutes() + "  Web serial is not supported in this broswer. Please use Microsoft Edge or Chrome with experimental feature enabled.\n";
                        this.logMessageContainer.value += msg;
                        this.logMessageContainer.scrollTop = this.logMessageContainer.scrollHeight;
                        console.error('Web serial doesn\'t seem to be enabled in your browser. Try enabling it by visiting:');
                        console.error('chrome://flags/#enable-experimental-web-platform-features');
                        console.error('opera://flags/#enable-experimental-web-platform-features');
                        console.error('edge://flags/#enable-experimental-web-platform-features');
                        this.systemStat = 0;
                        _a.label = 8;
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    MCUWebSerial.prototype.updateValue = function () {
        var freqCalc = this.pwmClock / this.perInt / 1e6;
        this.periodText.innerHTML = "= " + (this.perInt / 4).toFixed(2) + " ns ( " + (freqCalc.toFixed(3)) + " MHz)";
        var dctemp = parseInt(this.pri1dcInput.value);
        var dutyInt = this.perInt / 2 + dctemp;
        this.pri1dcText.innerHTML = "= " + (dctemp / 4).toFixed(2) + " ns (" + (100.0 * dutyInt / this.perInt).toFixed(3) + " %)";
        dctemp = parseInt(this.pri2dcInput.value);
        dutyInt = this.perInt / 2 + dctemp;
        this.pri2dcText.innerHTML = "= " + (dctemp / 4).toFixed(2) + " ns (" + (100.0 * dutyInt / this.perInt).toFixed(3) + " %)";
        dctemp = parseInt(this.sec1dcInput.value);
        dutyInt = this.perInt / 2 + dctemp;
        this.sec1dcText.innerHTML = "= " + (dctemp / 4).toFixed(2) + " ns (" + (100.0 * dutyInt / this.perInt).toFixed(3) + " %)";
        dctemp = parseInt(this.sec2dcInput.value);
        dutyInt = this.perInt / 2 + dctemp;
        this.sec2dcText.innerHTML = "= " + (dctemp / 4).toFixed(2) + " ns (" + (100.0 * dutyInt / this.perInt).toFixed(3) + " %)";
        dctemp = parseInt(this.pri1reInput.value);
        this.pri1reText.innerHTML = "= " + (dctemp / 4).toFixed(2) + " ns";
        dctemp = parseInt(this.pri1feInput.value);
        this.pri1feText.innerHTML = "= " + (dctemp / 4).toFixed(2) + " ns";
        dctemp = parseInt(this.pri2reInput.value);
        this.pri2reText.innerHTML = "= " + (dctemp / 4).toFixed(2) + " ns";
        dctemp = parseInt(this.pri2feInput.value);
        this.pri2feText.innerHTML = "= " + (dctemp / 4).toFixed(2) + " ns";
        dctemp = parseInt(this.pri1phInput.value);
        this.pri1phText.innerHTML = "= " + (dctemp / 4).toFixed(2) + " ns";
        dctemp = parseInt(this.pri2phInput.value);
        this.pri2phText.innerHTML = "= " + (dctemp / 4).toFixed(2) + " ns";
        dctemp = parseInt(this.sec1phInput.value);
        this.sec1phText.innerHTML = "= " + (dctemp / 4).toFixed(2) + " ns";
        dctemp = parseInt(this.sec2phInput.value);
        this.sec2phText.innerHTML = "= " + (dctemp / 4).toFixed(2) + " ns";
    };
    // Function to read the JSON from a file - returns a promise containing the parsed JSON
    MCUWebSerial.prototype.readJSONFile = function (file) {
        var _this = this;
        // Function will return a new Promise which will resolve or reject based on whether the JSON file is read and parsed successfully
        return new Promise(function (resolve, reject) {
            // Define a FileReader Object to read the file
            var fileReader = new FileReader();
            // Specify what the FileReader should do on the successful read of a file
            fileReader.onload = function (event) {
                // If successfully read, resolve the Promise with JSON parsed contents of the file
                if (event.target != null) {
                    var tmpStr = event.target.result;
                    if (typeof tmpStr === 'string') {
                        var tmpData = JSON.parse(tmpStr);
                        _this.periodInput.value = String(tmpData.Per);
                        _this.perInt = tmpData.Per;
                        _this.pri1reInput.value = String(tmpData.dt1Re);
                        _this.pri1feInput.value = String(tmpData.dt1Fe);
                        _this.pri2reInput.value = String(tmpData.dt1Re_2);
                        _this.pri2feInput.value = String(tmpData.dt1Fe_2);
                        _this.pri1phInput.value = String(tmpData.psPri);
                        _this.pri2phInput.value = String(tmpData.psPri_2);
                        _this.sec1phInput.value = String(tmpData.psSec);
                        _this.sec2phInput.value = String(tmpData.psSec_2);
                        _this.pri1dcInput.value = String(tmpData.dutyPri);
                        _this.pri2dcInput.value = String(tmpData.dutyPri_2);
                        _this.sec1dcInput.value = String(tmpData.dutySec);
                        _this.sec2dcInput.value = String(tmpData.dutySec_2);
                        _this.updateValue();
                        // console.log(tmp.Per);
                        resolve(JSON.parse(tmpStr));
                    }
                    else {
                        resolve(tmpStr);
                    }
                }
            };
            // If the file is not successfully read, reject with the error
            fileReader.onerror = function (error) { return reject(error); };
            // Read from the file, which will kick-off the onload or onerror events defined above based on the outcome
            fileReader.readAsText(file);
        });
    };
    // Function to be triggered when file input changes
    MCUWebSerial.prototype.fileChange = function (file) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                // As readJSONFile is a promise, it must resolve before the contents can be read - in this case logged to the console
                this.readJSONFile(file).then(function (json) {
                    if ((typeof json === 'object') && (json != null)) {
                        // if (json['Per'] != null)
                        console.log(json);
                    }
                });
                return [2 /*return*/];
            });
        });
    };
    /**
   * Takes a string of data, encodes it and then writes it using the `writer` attached to the serial port.
   * @param data - A string of data that will be sent to the Serial port.
   * @returns An empty promise after the message has been written.
   */
    MCUWebSerial.prototype.write = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var dataArrayBuffer;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        dataArrayBuffer = this.encoder.encode(data);
                        return [4 /*yield*/, this.writer.write(dataArrayBuffer)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
   * Takes already encoded and then writes it using the `writer` attached to the serial port.
   * @param edata - already encoded data that will be sent to the Serial port.
   * @returns An empty promise after the message has been written.
   */
    MCUWebSerial.prototype.writeE = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.writer.write(data)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Gets data from the `reader`, decodes it and returns it inside a promise.
     * @returns A promise containing either the message from the `reader` or an error.
     */
    MCUWebSerial.prototype.read = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, value, done, err_2, errorMessage;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.reader.read()];
                    case 1:
                        _a = _b.sent(), value = _a.value, done = _a.done;
                        // console.log(readerData.value);
                        if (done) {
                            this.reader.releaseLock();
                        }
                        return [2 /*return*/, value];
                    case 2:
                        err_2 = _b.sent();
                        errorMessage = "error reading data: " + err_2;
                        console.error(errorMessage);
                        return [2 /*return*/, errorMessage];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    MCUWebSerial.prototype.sleep = function (ms) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve) { return setTimeout(resolve, ms); })];
            });
        });
    };
    MCUWebSerial.prototype.encodeData = function (s1, t1) {
        var data = new Uint8Array(16);
        data[0] = s1.charCodeAt(0);
        data[1] = t1.Per & 0xFF;
        data[2] = t1.Per >> 8;
        data[3] = t1.psPri;
        data[4] = t1.psPri_2;
        data[5] = t1.psSec;
        data[6] = t1.dutyPri;
        data[7] = t1.dutyPri_2;
        data[8] = t1.dt1Re;
        data[9] = t1.dt1Fe;
        data[10] = t1.dt1Re_2;
        data[11] = t1.dt1Fe_2;
        data[12] = t1.psSec_2;
        data[13] = t1.dutySec;
        data[14] = t1.dutySec_2;
        var checksum = 0;
        for (var _i = 0; _i < 15; _i++) {
            checksum += data[_i];
        }
        //const checksum = data[0]+data[1]+data[2];
        data[15] = checksum % 256;
        return data;
    };
    MCUWebSerial.prototype.decodeInt = function (str) {
        var num = parseInt(str[0], 10);
        if (str.length == 2) {
            num += (parseInt(str[1], 10) << 8);
        }
        return num;
    };
    MCUWebSerial.prototype.decodeIntSigned = function (str) {
        var bitwidth = 8 * str.length;
        var val = this.decodeInt(str);
        var isnegative = val & (1 << (bitwidth - 1));
        var boundary = (1 << bitwidth);
        var minval = -boundary;
        var mask = boundary - 1;
        return isnegative ? minval + (val & mask) : val;
    };
    MCUWebSerial.prototype.getData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var now, returnData, i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11, i12, i13, displayData, msg;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        now = new Date();
                        // const listElement = document.createElement('li');
                        return [4 /*yield*/, this.sleep(300)];
                    case 1:
                        // const listElement = document.createElement('li');
                        _a.sent();
                        return [4 /*yield*/, this.read()];
                    case 2:
                        returnData = _a.sent();
                        i1 = this.decodeInt(returnData.slice(1, 3));
                        i2 = this.decodeInt(returnData.slice(3, 4));
                        i3 = this.decodeInt(returnData.slice(4, 5));
                        i4 = this.decodeInt(returnData.slice(5, 6));
                        i5 = this.decodeIntSigned(returnData.slice(6, 7));
                        i6 = this.decodeIntSigned(returnData.slice(7, 8));
                        i7 = this.decodeInt(returnData.slice(8, 9));
                        i8 = this.decodeInt(returnData.slice(9, 10));
                        i9 = this.decodeInt(returnData.slice(10, 11));
                        i10 = this.decodeInt(returnData.slice(11, 12));
                        i11 = this.decodeInt(returnData.slice(12, 13));
                        i12 = this.decodeIntSigned(returnData.slice(13, 14));
                        i13 = this.decodeIntSigned(returnData.slice(14, 15));
                        this.periodInput.value = String(i1);
                        this.perInt = i1;
                        this.pri1phInput.value = String(i2);
                        this.pri2phInput.value = String(i3);
                        this.sec1phInput.value = String(i4);
                        this.pri1dcInput.value = String(i5);
                        this.pri2dcInput.value = String(i6);
                        this.pri1reInput.value = String(i7);
                        this.pri1feInput.value = String(i8);
                        this.pri2reInput.value = String(i9);
                        this.pri2feInput.value = String(i10);
                        this.sec2phInput.value = String(i11);
                        this.sec1dcInput.value = String(i12);
                        this.sec2dcInput.value = String(i13);
                        this.updateValue();
                        displayData = "Data received.";
                        msg = now.getHours() + ":" + now.getMinutes() + "  " + displayData + "\n";
                        this.logMessageContainer.value += msg;
                        this.logMessageContainer.scrollTop = this.logMessageContainer.scrollHeight;
                        return [2 /*return*/];
                }
            });
        });
    };
    MCUWebSerial.prototype.verifyResponse = function (cmd, n1) {
        return __awaiter(this, void 0, void 0, function () {
            var now, returnData, msg, msg;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        now = new Date();
                        return [4 /*yield*/, this.sleep(150)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.read()];
                    case 2:
                        returnData = _a.sent();
                        if (cmd.charCodeAt(0) == this.decodeInt(returnData.slice(0, 1))) {
                            msg = now.getHours() + ":" + now.getMinutes() + "  Data sent to DSP.\n";
                            this.logMessageContainer.value += msg;
                            this.logMessageContainer.scrollTop = this.logMessageContainer.scrollHeight;
                        }
                        else {
                            msg = now.getHours() + ":" + now.getMinutes() + "  Error. Verification failed.\n";
                            this.logMessageContainer.value += msg;
                            this.logMessageContainer.scrollTop = this.logMessageContainer.scrollHeight;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    return MCUWebSerial;
}());
new MCUWebSerial();
