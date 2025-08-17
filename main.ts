// Robotic Arm (micro:bit #2)
radio.setGroup(1)
let baseAngle = 90
let shoulderAngle = 90
let gripAngle = 0

// Initialize PCA9685 (requires extension)
UDriver_PCA9685.pwm_write(UDriver_PCA9685.Pin.P0, 0)
// First, add the PCA9685 extension in MakeCode:
// 1. Go to Advanced -> Extensions
// 2. Search for "PCA9685" and add it
let servoDriver = PCA9685.new(0x40)

basic.forever(() => {
    // Optional: Add a small delay to prevent overwhelming the I2C bus
    basic.pause(20)
})

radio.onReceivedValue(function (name: string, value: number) {
    if (name == "base") {
        baseAngle = value
        servoDriver.setServoPosition(0, baseAngle, 100)
    }
    if (name == "shoulder") {
        shoulderAngle = value
        servoDriver.setServoPosition(1, shoulderAngle, 100)
    }
    if (name == "grip") {
        gripAngle = value
        servoDriver.setServoPosition(3, gripAngle, 100)
    }
})