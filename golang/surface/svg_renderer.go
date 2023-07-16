package main

import (
	"fmt"
	"io"
	"math"
)

var sin, cos = math.Sin(angle), math.Cos(angle)

type Fxy func(x, y float64) float64

func project(f Fxy, i, j int) (sx, sy float64) {
	x := xyrange * (float64(i)/cells - 0.5)
	y := xyrange * (float64(j)/cells - 0.5)
	z := f(x, y)
	sx = width/2 + (x-y)*cos*xyscale
	sy = height/2 + (x+y)*sin*xyscale - z*zscale

	return
}

func render(w io.Writer, f Fxy) {
	header := "<svg xmlns='http://www.w3.org/2000/svg'" +
		" style='stroke: grey; fill: white; stroke-width: 0.7' width='%d' height='%d'>\n"
	template := "<polygon points='%g,%g %g,%g %g,%g %g,%g'/>\n"
	footer := "</svg>"

	fmt.Fprintf(w, header, width, height)
	for i := 0; i < cells; i++ {
		for j := 0; j < cells; j++ {
			ax, ay := project(f, i+1, j)
			bx, by := project(f, i, j)
			cx, cy := project(f, i, j+1)
			dx, dy := project(f, i+1, j+1)
			fmt.Fprintf(w, template, ax, ay, bx, by, cx, cy, dx, dy)
		}
	}
	fmt.Fprintf(w, footer)

	return
}
