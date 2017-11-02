//A minimal implementation of a fragment shader

#version 430

struct Light {
  vec3  position;
  vec3  color;
  float intensity;
  float attenuation;
  float radius;
};

struct Material {
  vec3  ambientFactor;
  vec3  diffuseFactor;
  vec3  specularFactor;
  float shininessFactor;
}; 

layout (std140, binding = 0) uniform CameraInfo {
  mat4	ProjectionView; 
  vec3	eye;
};

layout (std430, binding = 1) readonly buffer LightsData {
	Light lights[];
};

uniform Material material;
uniform vec3  ambient_light_color;
uniform float ambient_light_intensity;

in  vec3 ex_FragPos;
in  vec4 ex_Color;
in	vec3 ex_Normal;
out vec4 out_Color;

// Debugging functions
bool checkzerov3(vec3 test, float epsilon) {
	if ((test.x >= 0-epsilon && test.x <= 0+epsilon) &&
		(test.y >= 0-epsilon && test.y <= 0+epsilon) &&
		(test.z >= 0-epsilon && test.z <= 0+epsilon))
		return true;
	return false;
}
bool checkzerof(float test, float epsilon) {
	if (test >= 0-epsilon && test <= 0+epsilon)
		return true;
	return false;
}

void main(void)
{
	// Basic ambient light
	vec3 ambient_light = ambient_light_color * ambient_light_intensity * material.ambientFactor;

	int i;
	vec3 diffuse = vec3(0.0,0.0,0.0);
	vec3 specular = vec3(0.0,0.0,0.0);
	for (i = 0; i < lights.length(); ++i) {
		Light wLight = lights[i];
		vec3 wLightColorsIntensity = wLight.color; // wLight.intensity not working?
		// Basic diffuse light
		vec3 norm = normalize(ex_Normal); // in this project the normals are all normalized anyway...
		vec3 lightDir = normalize(wLight.position - ex_FragPos);
		vec3 diff =  max(dot(norm, lightDir), 0.0) * wLight.color * material.diffuseFactor;
		diffuse = max(diff,diffuse);
		
		// Basic specular light
		vec3 viewDir = normalize(eye - ex_FragPos);
		vec3 reflectDir = reflect(-lightDir, norm);  
		float spec = pow(max(dot(viewDir, reflectDir), 0.0), material.shininessFactor);
		vec3 specLight = wLightColorsIntensity * (spec * material.specularFactor);
		specular = max(specLight,specular);
		//out_Color.rgb = vec3(wLight.intensity, wLight.attenuation, wLight.radius);
		//out_Color.a = 1.0;
		//return;
	}

	out_Color = vec4(specular + diffuse + ambient_light,1.0); 
}