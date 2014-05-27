// Controlling a servo position using a potentiometer (variable resistor) 
// by Michal Rinott <http://people.interaction-ivrea.it/m.rinott> 

  #include <Servo.h> 
  #include <Ultrasonic.h>
  
  #define irLedPin 4          // IR Led on this pin
  #define irSensorPin 5       // IR sensor on this pin 
  
  Servo myservo;  // create servo object to control a servo    
  int botella=0;
  Ultrasonic ultrasonic(49,48); // (Trig PIN,Echo PIN)

void setup() 
{ 
  Serial.begin(9600); 
  myservo.attach(9);
  // prints title with ending line break 
} 

void loop() 
{ 
  myservo.write(180);                  // sets the servo position according to the scaled value 

  int distance = ultrasonic.Ranging(CM);
  if(distance < 8){
    delay(1000);
    myservo.write(0);
    Serial.println(1);
  }
  delay(1500);
  
} 
