#version 330 core

precision highp float;

uniform float u_width;
uniform float u_height;
uniform float u_time;
out vec3 color;

void main(void) {

	int limit = 1000;
	// some point on the side
	float m_p_x = .407476;
	float m_p_y = .234204;
	
	// end of antena
	m_p_x = -2;
	m_p_y = 0;

	m_p_x = -0.77568377;
	m_p_y = 0.13646737;

	float Cr = (gl_FragCoord.x - u_width / 2.) / u_time + m_p_x;
	float Ci = (gl_FragCoord.y - u_height / 2.) / u_time + m_p_y;
  float R = 0., I = 0.,  R2 = R*R, I2 = I*I;
  int mm;
	for(int m = 0; m < limit; m++) {
		I=(R+R)*I+Ci;  R=R2-I2+Cr;  R2=R*R;  I2=I*I;    mm = m;
		if( R2 + I2 > 4. ) break;
	}
	if (mm == limit - 1) {
		color = vec3(0., 0., 0.);
	} else {
		float a = mod(float(mm), 60.) / 20.;
		color = vec3( max(0., abs(a - 1.5) - .5), max(0., 1. - abs(a - 1.)), max(0., 1. - abs(a - 2.)));
	}
}
