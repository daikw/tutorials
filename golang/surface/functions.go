package main

import "math"

func product(x, y float64) float64 {
	return x * y
}

func sinRr(x, y float64) float64 {
	r := math.Hypot(x, y)
	return math.Sin(r) / r
}
